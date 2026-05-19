'use client';

import { useEffect, useRef } from 'react';

/**
 * Container for the GoHighLevel calendar booking widget.
 *
 * Mirrors GHLFormContainer.tsx — same iframe injection + form_embed.js loader
 * pattern. Kept as a separate component so the page-level copy and layout
 * decisions (heading, intro line) can diverge from the claim-check funnel.
 */

// === PASTE FROM GHL ============================================================
const GHL_BOOKING_IFRAME_HTML =
  '<iframe src="https://api.leadconnectorhq.com/widget/booking/uEQ7viDh1491uAGd9kAJ" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="uEQ7viDh1491uAGd9kAJ_1779217284629"></iframe>';
const GHL_SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';
// ===============================================================================

export function BookingContainer() {
  const scriptInjectedRef = useRef(false);

  useEffect(() => {
    if (scriptInjectedRef.current) return;
    if (!GHL_BOOKING_IFRAME_HTML) return;

    // Avoid duplicate loader if user came from /claim-check (which already injected it)
    if (document.querySelector(`script[src="${GHL_SCRIPT_SRC}"]`)) {
      scriptInjectedRef.current = true;
      return;
    }

    const script = document.createElement('script');
    script.src = GHL_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
    scriptInjectedRef.current = true;
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">
            Step 2 of 2
          </p>
          <h1 className="mt-2 text-balance text-2xl font-extrabold tracking-tight text-brand-black md:text-3xl">
            You&apos;re in. Now pick a time for your free inspection.
          </h1>
          <p className="mt-2 text-sm text-brand-gray md:text-base">
            Choose a 30-minute window that works for you. We&apos;ll send a text
            confirmation and a reminder the day before.
          </p>
        </div>

        <div className="rounded-2xl border border-brand-gray-light/50 bg-white p-3 shadow-lg md:p-5">
          <div
            className="ghl-embed-container min-h-[720px]"
            dangerouslySetInnerHTML={{ __html: GHL_BOOKING_IFRAME_HTML }}
          />
        </div>

        <p className="mt-4 text-center text-xs text-brand-gray">
          Can&apos;t find a time that works? Call us directly at{' '}
          <a
            href="tel:+12083983108"
            className="font-semibold text-brand-red underline-offset-2 hover:underline"
          >
            (208) 398-3108
          </a>
          .
        </p>
      </div>
    </section>
  );
}
