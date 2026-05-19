import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#fafaf9] border-t border-slate-200 px-5 pt-10 pb-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/logo.svg"
              alt="Sawtooth Roofing"
              width={160}
              height={36}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-xs">
              Sawtooth Roofing serves homeowners across Caldwell, Meridian,
              Nampa, Boise and the broader Treasure Valley.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Contact
            </h3>
            <div className="mt-3 space-y-1 text-sm text-slate-700">
              <p>
                Sam Wade ·{" "}
                <a
                  href="tel:+12083983108"
                  className="text-[#a01d25] font-semibold hover:underline"
                >
                  (208) 398-3108
                </a>
              </p>
              <p>
                <a
                  href="mailto:sam@sawtooth-roofing.com"
                  className="hover:underline"
                >
                  sam@sawtooth-roofing.com
                </a>
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
              Legal
            </h3>
            <div className="mt-3 space-y-1 text-sm">
              <Link
                href="/privacy"
                className="block text-slate-700 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-slate-700 hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-500 leading-relaxed">
            © 2026 Sawtooth Customs LLC, dba Sawtooth Roofing. Licensed &
            insured in the State of Idaho. Insurance coverage depends on your
            policy, deductible, and the carrier&apos;s damage determination —
            results vary.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
export { Footer };
