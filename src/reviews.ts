// Build-time Google reviews fetch (Stage 3b Phase A). Static render, no runtime
// third-party script — the Trustindex evaluation proved a runtime widget is
// invisible to crawlers, costs ~230KB across two new origins, can inject
// vendor-controlled markup, and exposes no CSS custom properties. This fixes
// all four by fetching once at build time and rendering our own markup.
//
// RULING (2026-07-28): the Featurable widget is configured with
// config.minStars = 5 — it returns only 5-star reviews, by deliberate choice,
// not a bug to work around. totalReviewCount and averageRating describe the
// COMPLETE Google Business Profile; reviews[] is the 5-star subset. Every
// caller of this module must keep that distinction visible to the reader —
// see the aggregate string built in index.astro's social-proof section.
//
// No auth: the widget ID is public (it ships in Featurable's own embed
// snippet), so it is committed here rather than read from an env var.
import snapshot from './data/reviews-snapshot.json';

const WIDGET_URL = 'https://api.featurable.com/v1/widgets/cf7f92b3-f146-4ccf-a248-61b961845a6e';

export interface Review {
  reviewId: string;
  displayName: string;
  profilePhotoUrl: string | null;
  starRating: number;
  comment: string;
  createTime: string;
}

export interface ReviewsData {
  totalReviewCount: number;
  averageRating: number;
  reviews: Review[];
  usedFallback: boolean;
}

interface RawFeaturableReview {
  reviewId: string;
  reviewer?: { displayName?: string; profilePhotoUrl?: string | null };
  starRating: number;
  comment?: string;
  createTime: string;
}

interface RawFeaturablePayload {
  totalReviewCount: number;
  averageRating: number;
  reviews: RawFeaturableReview[];
}

function normalize(raw: RawFeaturablePayload, usedFallback: boolean): ReviewsData {
  return {
    totalReviewCount: raw.totalReviewCount,
    averageRating: raw.averageRating,
    usedFallback,
    reviews: raw.reviews.map((r) => ({
      reviewId: r.reviewId,
      displayName: r.reviewer?.displayName ?? 'Google user',
      profilePhotoUrl: r.reviewer?.profilePhotoUrl ?? null,
      starRating: r.starRating,
      comment: r.comment ?? '',
      createTime: r.createTime,
    })),
  };
}

// A3 build-failure safety: a transient API failure at build time must not
// break a deploy. src/data/reviews-snapshot.json is a committed copy of the
// last successful fetch (refresh it by re-running this fetch and overwriting
// the file — there is no automated refresh job). On fallback we log loudly
// so a stale snapshot silently shipping forever doesn't go unnoticed.
async function fetchReviews(): Promise<ReviewsData> {
  try {
    const res = await fetch(WIDGET_URL, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`Featurable API returned HTTP ${res.status}`);
    const json = await res.json();
    if (!json.success || !Array.isArray(json.reviews)) {
      throw new Error('Featurable API response missing success/reviews[]');
    }
    return normalize(json, false);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('\n\x1b[31m⚠ BUILD WARNING — Featurable reviews fetch failed: ' + message);
    console.error(
      `⚠ Falling back to the committed snapshot (src/data/reviews-snapshot.json, fetched ${snapshot.fetchedAt}).\x1b[0m\n`
    );
    return normalize(snapshot as RawFeaturablePayload, true);
  }
}

// Home and About both need these figures; a bare per-page top-level await
// would fire the fetch twice in one `astro build` run. Memoized per build
// process so every caller shares the same in-flight/settled promise.
let cached: Promise<ReviewsData> | null = null;

export function getReviews(): Promise<ReviewsData> {
  if (!cached) cached = fetchReviews();
  return cached;
}
