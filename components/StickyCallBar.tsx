/**
 * Mobile-only sticky bottom CTA. Hidden on md+ since the header has a visible
 * call button on desktop. Includes safe-area padding for iOS notch devices.
 */
export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-red-dark/40 bg-brand-red shadow-[0_-6px_18px_-4px_rgba(0,0,0,0.25)] md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href="tel:+12083983108"
        className="flex items-center justify-center gap-2 px-4 py-3.5 text-base font-bold text-white active:bg-brand-red-dark"
        aria-label="Tap to call Sawtooth Roofing at (208) 398-3108"
      >
        <PhoneIcon className="h-5 w-5" />
        <span>Tap to Call</span>
        <span className="opacity-90">·</span>
        <span>(208) 398-3108</span>
      </a>
    </div>
  );
}

export default StickyCallBar;

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
