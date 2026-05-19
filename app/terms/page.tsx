import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata = {
  title: "Terms of Service | Sawtooth Roofing",
  description: "Terms governing use of the Sawtooth Roofing website and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Header />
      <article className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: May 19, 2026</p>

        <div className="mt-8 prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website{" "}
            <span className="font-medium">sawtooth-roofing.com</span> (the &ldquo;Site&rdquo;) operated by
            Sawtooth Customs LLC, doing business as Sawtooth Roofing (&ldquo;Sawtooth Roofing,&rdquo;
            &ldquo;we,&rdquo; or &ldquo;us&rdquo;). By using the Site, you agree to these Terms. If you do not
            agree, please do not use the Site.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">1. About Our Services</h2>
          <p>
            Sawtooth Roofing is a residential roofing contractor licensed and insured in the
            State of Idaho, serving the Treasure Valley. Through the Site, you can request a
            free roof inspection, learn about our services, and contact us.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">2. Free Roof Inspection</h2>
          <p>
            When you submit a form requesting an inspection, you agree that a Sawtooth Roofing
            representative may contact you by phone, text, or email to schedule and conduct the
            inspection. Inspections are free and carry no obligation to proceed with repair or
            replacement work.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">3. Insurance Claims &amp; Coverage</h2>
          <p>
            We assist homeowners with documenting storm damage and navigating the insurance
            claim process. <strong>We do not guarantee insurance approval, deductible coverage,
            or any specific claim outcome.</strong> Insurance coverage depends on your individual
            policy terms, deductible, carrier policies, the carrier&apos;s damage determination,
            and applicable law. Premium impacts and claim outcomes vary by carrier and policy.
            We are not your insurance carrier, agent, or public adjuster, and nothing on the
            Site is insurance advice.
          </p>
          <p>
            <strong>You are responsible for any deductible owed under your policy.</strong>{" "}
            Idaho law prohibits roofing contractors from paying, waiving, rebating, or absorbing
            insurance deductibles, and we do not do so.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">4. Scheduling &amp; Communication</h2>
          <p>
            By providing your phone number, you consent to receive calls and texts related to
            your inspection and project. Marketing texts require separate opt-in consent and
            you may opt out at any time by replying STOP. See our{" "}
            <a href="/privacy" className="text-[#a01d25] font-medium hover:underline">
              Privacy Policy
            </a>{" "}
            for details on SMS messaging.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">5. Site Use &amp; Restrictions</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the Site for any unlawful purpose</li>
            <li>Submit false or misleading information</li>
            <li>Attempt to disrupt, hack, scrape, or reverse-engineer the Site</li>
            <li>Use the Site to send spam or unsolicited messages</li>
            <li>Copy, reproduce, or redistribute Site content without our written permission</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-10">6. Intellectual Property</h2>
          <p>
            All content on the Site, including the Sawtooth Roofing name, logo, photos, text,
            and design, is owned by Sawtooth Customs LLC or its licensors and is protected by
            copyright and trademark law. You may not use any of it without prior written
            permission.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">7. Disclaimers</h2>
          <p>
            The Site and our services are provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the
            fullest extent permitted by law, we disclaim all warranties, express or implied,
            including merchantability, fitness for a particular purpose, and non-infringement.
            We do not warrant that the Site will be uninterrupted, error-free, or secure.
          </p>
          <p>
            Information on the Site is for general purposes only and does not constitute legal,
            insurance, or financial advice.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Sawtooth Customs LLC and its owners,
            employees, and contractors shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from your use of the Site,
            including loss of profits, data, or goodwill. Our total liability for any claim
            related to the Site shall not exceed one hundred U.S. dollars ($100).
          </p>
          <p>
            This limitation does not apply to liability that cannot be limited under applicable
            Idaho law (including gross negligence or willful misconduct).
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">9. Roofing Work Contract Terms</h2>
          <p>
            These Site Terms do not govern any roofing repair or replacement work we perform
            for you. Roofing work is governed by a separate written contract signed by you and
            Sawtooth Roofing. In the event of any conflict, the signed contract controls.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">10. Indemnification</h2>
          <p>
            You agree to indemnify and hold Sawtooth Customs LLC and its representatives
            harmless from any claims, damages, or expenses (including reasonable attorneys&apos;
            fees) arising from your violation of these Terms or your misuse of the Site.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">11. Governing Law &amp; Disputes</h2>
          <p>
            These Terms are governed by the laws of the State of Idaho, without regard to
            conflict of laws principles. Any dispute arising from these Terms or your use of
            the Site shall be brought exclusively in the state or federal courts located in
            Ada or Canyon County, Idaho, and you consent to personal jurisdiction there.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">12. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The updated Terms will be posted on
            this page with a new &ldquo;Last updated&rdquo; date. Continued use of the Site after
            changes are posted constitutes acceptance.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">13. Contact Us</h2>
          <p>
            Sawtooth Customs LLC<br />
            dba Sawtooth Roofing<br />
            Meridian, Idaho<br />
            (208) 398-3108<br />
            <a href="mailto:privacy@sawtooth-roofing.com" className="text-[#a01d25] font-medium hover:underline">
              privacy@sawtooth-roofing.com
            </a>
          </p>
        </div>
      </article>
      <Footer />
      <StickyCallBar />
    </main>
  );
}
