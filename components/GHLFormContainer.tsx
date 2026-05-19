'use client';

import { useEffect, useRef } from 'react';

/**
 * Container for the GoHighLevel survey embed.
 *
 * GHL gives you a snippet like:
 *   <iframe src="https://api.leadconnectorhq.com/widget/form/XXXX" ...></iframe>
 *   <script src="https://link.msgsndr.com/js/form_embed.js"></script>
 *
 * Paste the IFRAME markup as a string into GHL_IFRAME_HTML and the SCRIPT src
 * into GHL_SCRIPT_SRC below. The component injects the iframe via
 * dangerouslySetInnerHTML (GHL gives plain HTML, not a React component) and
 * appends the form_embed.js loader once on mount.
 */

// === PASTE FROM GHL ============================================================
const GHL_IFRAME_HTML =
  '<iframe src="https://api.leadconnectorhq.com/widget/survey/6OvrNE9iCULLNDA8jW3T" style="border:none;width:100%;" scrolling="no" id="6OvrNE9iCULLNDA8jW3T" title="survey"></iframe>';
const GHL_SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';
// ===============================================================================

export function GHLFormContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptInjectedRef = useRef(false);

  useEffect(() => {
    if (scriptInjectedRef.current) return;
    if (!GHL_IFRAME_HTML) return; // nothing to enhance yet

    // Avoid duplicate loader if Next re-mounts the component
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
    <section id="claim-form" className="bg-[#fafaf9] px-5 pb-2">
      <div className="mx-auto max-w-xl">
        <div
          ref={containerRef}
          dangerouslySetInnerHTML={{ __html: GHL_IFRAME_HTML }}
        />
      </div>
    </section>
  );
}

function FormPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-brand-gray-light bg-brand-gray-light/10 p-8 text-center">
      <p className="text-sm font-semibold text-brand-black">
        GoHighLevel survey embed slot
      </p>
      <p className="mt-2 max-w-md text-xs text-brand-gray">
        Paste your GHL iframe HTML into{' '}
        <code className="rounded bg-white px-1 py-0.5 font-mono text-[11px] text-brand-red">
          GHL_IFRAME_HTML
        </code>{' '}
        inside <code className="rounded bg-white px-1 py-0.5 font-mono text-[11px]">components/GHLFormContainer.tsx</code>.
        The form_embed.js loader is already wired up.
      </p>
    </div>
  );
}

export default GHLFormContainer;
