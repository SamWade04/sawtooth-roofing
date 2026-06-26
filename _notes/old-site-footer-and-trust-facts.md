# Old Site — Footer & Trust Facts Extraction (Phase 6 footer-first pass)

**Source:** `sawtooth-customs.com` (live, logged-out HTTP GET) + local backup `sawtooth-customs_2026-05-20/` (SQL dump + kdw-framework4 theme files). Read-only.
**Cache stamps captured from live GET:** home `2026-06-19 10:09:47`, contact `2026-06-25 12:43:17` (today), about `2026-06-24 22:01:47` — pages are current.
**Table prefix in dump:** `wp_z5x34320_` (security-randomized — note for any future SQL grep).

---

## 1. Facts table

| # | Field | Value as found | Source (file:line or URL + location) | Flag |
|---|---|---|---|---|
| 1 | **Contractor registration / license number** | **NONE — absent everywhere.** No `RCE-#####`, no ICCB ID, no Idaho Contractors Board number is published anywhere in the rendered DOM of `/`, `/contact/`, `/about/` or in the theme/plugin source. The only license-adjacent text is the generic phrase "licensed, insured" (and one Yoast meta description on `/about/` that begins "Licensed roofing contractors…"). | live GET `/`, `/contact/`, `/about/` (full body grep); SQL dump grep for `RCE`/`ICCB`/`registered contractor` — 0 hits. Theme grep — 0 hits. | **MISSING** (PRIMARY) |
| 2 | Legal entity name string (as displayed) | "Sawtooth Roofing" (in Yoast Organization graph, LocalBusiness JSON-LD, footer copyright). `alternateName`: "Sawtooth Customs". No `legalName` property emitted. No "Roofing & Construction LLC" anywhere. No "Morrow Construction" anywhere. | live `/` JSON-LD `Organization.name` + `alternateName`; footer copyright `© 2026 Sawtooth Roofing` | **FLAG-FOR-COMMAND** (legal name "Sawtooth Roofing & Construction LLC" never appears) |
| 3 | Other public IDs (bond #, EIN, etc.) | None published. | n/a | **MISSING** |
| 4 | Business name (NAP name) | "Sawtooth Roofing" | live home footer + LocalBusiness JSON-LD `name` | OK (matches current brand) |
| 5 | Street address | `1120 South Rackham Way` | live home footer raw text; LocalBusiness JSON-LD `streetAddress`; ACF option `options_location_street_address` in dump | **DIFFERS-FROM-CANON** (canon: 1560 S Carol St) |
| 6 | City / State / Zip | `Meridian, Idaho 83642`  (ACF: city=`Meridian`, state=`ID`, postal=`83642`, country=`US`) | live home footer; LocalBusiness JSON-LD `address`; ACF `options_location_city/_state/_postal_code/_country` | **DIFFERS-FROM-CANON** (canon: 83646) |
| 7 | Phone(s) | Footer line shows two: `208-740-9201` and `949-573-7737`. In ACF: `phone_numbers` has 3 entries — `Local: +1 (208) 740-9201`, `Josh: 208-740-9201` (recurring), `Anthony: 949-573-7737` (recurring, California area code). | live footer hrefs `tel:208-740-9201`, `tel:949-573-7737`; ACF `options_phone_numbers_*` | **DIFFERS-FROM-CANON** (canon: 208.996.8748); the 949 number is a California area code (worth confirming with command) |
| 8 | Email | `contact@sawtooth-customs.com` | live footer `mailto:`; ACF `options_email_addresses_0_email_address`. (Admin email = `development@keydesignwebsites.com` — KDW agency address, not customer-facing.) | OK (matches brand) |
| 9 | Hours of operation | **Not published anywhere.** No `openingHours` in either JSON-LD block. No "hours" in footer. ACF has no populated hours fields. | live `/`, `/contact/`; theme inset-schema.php (skipped — `google_location_and_maps` is `0`) | **MISSING** |
| 10 | Manufacturer certifications / designations | Two roofing-brand badges in the footer widget area: **Owens Corning** (alt: "Owens Corning Logo", img: `2025/05/Group-300.webp`) and **ABC Supply Co.** (alt: "ABC supply co Logo", img: `2025/05/Group-303.webp`). No GAF, no CertainTeed, no Master Elite, no Platinum/Preferred-tier wording. | live footer `<img alt>` + hrefs | OK (carry these two over if still accurate; confirm whether Owens Corning Preferred / Platinum tier is held) |
| 11 | Industry associations / accreditations | **None published.** No BBB badge, no NRCA, no chamber, no Idaho Roofing Contractors Association reference anywhere. | live footer + sitewide grep | **MISSING** |
| 12 | Insurance / bonding statements | No explicit "Licensed, Bonded & Insured" claim in footer or schema. The about-page Yoast meta description contains the word "Licensed" but no number/details. The 12 footer logos are **insurance carriers we work with on claims**, NOT insurance the company carries — clarifying header literally says "Our Suppliers — Trusted Roofing Materials From Leading Brands" (note: the heading is mismatched to the carrier logos beneath it — see Flags). | live footer raw text | **FLAG-FOR-COMMAND** (no explicit insured/bonded statement; misleading heading on carrier strip) |
| 13 | Social profile URLs | **None.** No Facebook, Instagram, Google Business, Yelp, LinkedIn, X/Twitter link in footer or header. Yoast social option keys (`facebook_site`, `instagram_url`, `linkedin_url`, etc.) are all empty strings in the dump. The LocalBusiness JSON-LD has no `sameAs` array. | live home `<footer>` href dump; ACF `wpseo_social` | **MISSING** |
| 14 | Copyright line / legal disclaimers | Footer: `© 2026 Sawtooth Roofing — All Rights Reserved` (year is dynamic via `date('Y')`) followed by `Site built & hosted by Key Design Websites`. Legal menu links: Disclaimer / Linking Policy / Privacy Policy / Testimonials Disclosure / Terms of Use. | live home footer raw text; theme `inc/shortcodes.php:254` (`sitecopyright_func`), `inc/shortcodes.php:245` (`sitehosted_func`) | OK |
| 15 | Footer tagline / positioning line | `Our Suppliers / Trusted Roofing Materials From Leading Brands` (above carrier strip). Site-wide tagline (ACF): `Roof Repair \| Roof Inspections \| Meridian, Idaho`. | live footer raw text; ACF `options_tagline_one` | OK (informational only — copy is being replaced in Phase 7) |
| 16 | Service areas listed in footer | **None listed in footer.** ACF `options_service_areas` is empty. No city list, no Treasure Valley reference in the footer DOM. | live footer; ACF `options_service_areas` | **MISSING** |
| 17 | Services listed in footer | **None listed in footer.** Footer contains no services menu. | live footer | **MISSING** |
| 18 | Review count + average rating | **83 Google reviews, 5.0 average** (per Trustindex `trustindex-google-page-details` in dump). Trustindex slider is on the home page **body** (not in footer), filtered to 4-5 star ratings only. Google Place ID: `ChIJY8O5EuAZXGkRseDnA-Ad3Pk`. Listed under Google business name "Sawtooth Roofing". | SQL dump option `trustindex-google-page-details` (`rating_number:83`, `rating_score:5`); `trustindex-google-filter` confirms `stars=[4,5]`, `only-ratings=true` | OK (use 83 / 5.0 as snapshot for the new trust strip; verify the live current count before publish) |
| 19 | Full hardcoded LocalBusiness JSON-LD block | **NOT hardcoded — emitted by template from ACF options.** Block source: `template-parts/inset-schema.php:30-62`. Rendered output on every page (verbatim from live `/`, formatting preserved): <br>```json{"@context": "https://schema.org","@type": "LocalBusiness","name": "Sawtooth Roofing","@id": "https://sawtooth-customs.com","url": "https://sawtooth-customs.com","logo": "https://sawtooth-customs.com/wp-content/uploads/2026/06/sawtooth-roofing-header-bold-1198w.webp","image": "https://sawtooth-customs.com/wp-content/uploads/2026/06/sawtooth-roofing-header-bold-1198w.webp","telephone": "+1 (208) 740-9201","priceRange": "$$$","address": {"@type": "PostalAddress","streetAddress": "1120 South Rackham Way","addressLocality": "Meridian","addressRegion": "ID","postalCode": "83642","addressCountry": "US"  } }```<br>**Missing properties:** `legalName`, `geo`, `openingHours`, `sameAs`, `identifier`, `areaServed`, `aggregateRating`. The template *can* emit `sameAs` and `areaServed` from ACF `social_networks` / `service_areas`, but both ACF arrays are empty so neither renders. The richer "with locations" branch (`template-parts/inset-schema.php:87-149`) is skipped because `options_google_location_and_maps = 0`. There is also `options_additional_json_ld_schema` — but it is an empty string, so no additional schema is injected. Yoast separately emits a `WebPage / Organization / WebSite / BreadcrumbList` graph (name "Sawtooth Roofing", alternateName "Sawtooth Customs", `@id …/#organization`). | live `/` (both blocks); theme `template-parts/inset-schema.php:14-69` | OK (template) / **FLAG-FOR-COMMAND** (rendered schema is thin — no `legalName`, `geo`, `openingHours`, `sameAs`, `identifier`) |
| 20 | Rename stragglers ("Sawtooth Customs" still showing) | (a) Domain itself is `sawtooth-customs.com`. (b) Contact page `<title>`: `Sawtooth Customs \| Contact Us \| Meridian, Idaho`. (c) Yoast Organization `alternateName: "Sawtooth Customs"`. (d) DB ACF option `options_official_operating_name = "Sawtooth Customs"` (overridden in live rendering by Yoast's "Sawtooth Roofing", but still the canonical operating name in the page builder template that runs `sitecopyright`/schema). (e) Email is still `contact@sawtooth-customs.com`. (f) Contact form post title: `Contact Page Form` (no straggler, but lives under `wpcf7_contact_form`). | Yoast schema; `<title>` tags; ACF `options_official_operating_name`; mailto href | **RENAME-STRAGGLER** |

---

## 2. Where each fact is authored (single-home map for the new build)

| Fact | Authored in (old site) |
|---|---|
| Phone numbers (3) | ACF Options page → `options_phone_numbers_*` (wp_options) |
| Email(s) | ACF Options page → `options_email_addresses_*` (wp_options) |
| Street/city/state/zip/country | ACF Options page → `options_location_*` (wp_options) |
| Operating name | ACF Options page → `options_official_operating_name` (wp_options) |
| Tagline | ACF Options page → `options_tagline_one` (wp_options) |
| 12 carrier logos + 2 supplier logos in footer | ACF Options Page → `options_footer_information_0..11_footer_info_box` (raw HTML `<img>` per box) — rendered by `[globalfooter]` shortcode at `inc/shortcodes.php:558-573`, dropped into footer template by `template-parts/footer-two.php:13` (`select_footer_0` is set to `footer-two`, per `framework4_settings_option_name`) |
| Copyright string | Theme shortcode `[sitecopyright]` at `inc/shortcodes.php:251-256` — dynamic year + ACF `official_operating_name` |
| "Site built & hosted by Key Design Websites" credit | Theme shortcode `[sitehosted]` at `inc/shortcodes.php:243-247` (hardcoded text — agency credit; remove on new site) |
| Legal links menu | WP nav menu `legal-menu`, rendered via `[menunavigation theme_location="legal-menu"]` in `template-parts/footer-two.php:18` |
| LocalBusiness JSON-LD | `template-parts/inset-schema.php` (theme), wired into `<head>` via `header.php:18` → `wp_head()` |
| Yoast graph (Organization/WebPage/WebSite/BreadcrumbList) | `wordpress-seo` plugin (Yoast) |
| Review count/rating widget | `trustindex-google-*` options (Trustindex Google Reviews plugin) — slider rendered on home page body, not footer |
| Owens Corning + ABC Supply logos | ACF widgetized area or extra rows of `options_footer_information` (live DOM shows them as `Group-300.webp` / `Group-303.webp` rendered alongside the 12 carrier logos) |
| Site URL / home | `wp_options.siteurl` = `wp_options.home` = `https://sawtooth-customs.com` |

---

## 3. Findings summary

**(a) Idaho contractor registration / RCE number — confirmed absent.**
Zero matches for `RCE-`, `ICCB`, "registered contractor", or a numeric registration ID across the live DOM (home/contact/about) AND the entire SQL dump + theme + plugin source. The only adjacent language anywhere on the site is the generic phrase "licensed, insured" and one Yoast meta description containing the word "Licensed" with no number. **→ The number was never published on the old site and must be sourced from the Idaho Contractors Board record (or whoever holds the registration certificate for Sawtooth Roofing & Construction LLC, Idaho entity #6034331).**

**(b) NAP discrepancies vs canon — all three components differ.** The live site (and the backup) consistently publish:
- Address: `1120 South Rackham Way, Meridian, ID 83642`
- Phone (primary): `208-740-9201`

Canon (per brief) is `1560 S Carol St, Meridian, ID 83646` and `208.996.8748`. Both the address (different street **and** zip) and the phone are different — this is not a single typo. The footer also displays a second number, `949-573-7737`, labelled "Anthony" in ACF — a California (Orange County) area code. Command should resolve which of {current canon, Rackham Way address, 208-740-9201 line, 949 line} are operational today before the new footer goes live; the LocalBusiness schema is currently broadcasting the Rackham/740-9201 pair to Google.

**(c) Certs / associations worth carrying to the new site.** The only manufacturer/supplier badges actually displayed are **Owens Corning** and **ABC Supply Co.** (footer widget logos at `wp-content/uploads/2025/05/Group-300.webp` and `Group-303.webp`). There is NO GAF, CertainTeed, Master Elite, NRCA, BBB, chamber, or Idaho roofing-trade-association badge anywhere. **Trustindex Google Reviews: 83 reviews / 5.0 average rating** (Google Place ID `ChIJY8O5EuAZXGkRseDnA-Ad3Pk`, Google business name "Sawtooth Roofing") — this is the only trust signal currently present that has weight. Recommend carrying: (i) Owens Corning logo (verify tier — is the company an Owens Corning Preferred / Platinum Contractor? Not stated on old site), (ii) ABC Supply logo, (iii) Google review count + 5.0 star with link to the Google Place. Do NOT carry the agency footer credit ("Site built & hosted by Key Design Websites") — that's KDW's promotional inclusion.

**(d) Flags for Command.**
- **F1 — RCE/license number missing entirely:** must be sourced externally (Contractors Board lookup) before the new footer can credibly say "Licensed Idaho contractor RCE-####".
- **F2 — Legal entity name never appears on the old site:** schema `name` is "Sawtooth Roofing", `alternateName` is "Sawtooth Customs"; the canonical legal entity name "Sawtooth Roofing & Construction LLC" is unused. Decide whether to add `legalName` to the new schema and whether to put the LLC name in the footer copyright line.
- **F3 — Footer carrier strip is misleading:** the 12 logos under the heading "Our Suppliers — Trusted Roofing Materials From Leading Brands" are **insurance carriers** (Travelers, State Farm, Farmers, Farm Bureau, Country Financial, Allstate, Hartford, Safeco, Grange, Homesite, American Family, Auto Owners), not material suppliers. Decide whether the new footer should (a) split into "Insurance carriers we work with" + "Material suppliers", (b) keep only Owens Corning + ABC Supply, or (c) drop the strip entirely.
- **F4 — Two phone numbers, one in California (949):** the 949-573-7737 number labelled "Anthony" is currently published in the footer and `tel:` link. Confirm whether this should remain on the new site.
- **F5 — Schema is thin:** rendered LocalBusiness lacks `legalName`, `geo`, `openingHours`, `sameAs`, `identifier`, `areaServed`, `aggregateRating`. The new build should fill all of these (the Trustindex 83/5.0 cleanly satisfies `aggregateRating`).
- **F6 — Hours of operation are not published anywhere on the old site.** Source them from the operator before publishing the new footer.
- **F7 — No social profiles configured anywhere** (footer, Yoast, schema). Confirm with command which social URLs (if any) should be added — at minimum a Google Business profile URL is high-value given the 83/5.0 review base.
- **F8 — Admin email is `development@keydesignwebsites.com`** (KDW agency address). Verify wp_options.admin_email isn't being used as a from-address before migration cutover; replace with an operational `contact@sawtooth-customs.com` or `@sawtoothroofing` address.
- **F9 — Domain itself (`sawtooth-customs.com`), the contact page `<title>`, and the ACF `official_operating_name`** all still carry "Sawtooth Customs". A complete rename pass is needed outside the new theme as well — these strings won't auto-update from the new site templates.

---

## Out-of-scope items observed but NOT folded in (Flags for Command, scope-creep watch)

- A "Roofguard" page exists (id=1089, `/roofguard/`) — possibly a product/program outside the locked 5 services. Flag, don't fold.
- A "Recent Projects" page exists (id=1240, `/recent-projects/`) but no `project` custom post type and no project entries — it's a single static page using ACF Foundation Rows. Project gallery would be a portfolio decision, not a service-area question.
- The kdw-advanced-testimonials plugin registers a `testimonial` CPT but has **0 testimonial entries** in the DB — Google reviews via Trustindex are doing this job instead.
- ACF has fields for `options_locations_*` (multi-location support) populated with **placeholder garbage** (`First Office`, `Second Office`, `1234.1234.1234`, `Sample Directions`) — never cleaned up, but never displayed because the schema template uses the single-location branch.
