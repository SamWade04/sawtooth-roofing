import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export const metadata = {
  title: "Privacy Policy | Sawtooth Roofing",
  description: "How Sawtooth Roofing collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Header />
      <article className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: May 19, 2026</p>

        <div className="mt-8 prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
          <p>
            Sawtooth Customs LLC, doing business as Sawtooth Roofing (&ldquo;Sawtooth Roofing,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), respects your privacy. This Privacy Policy
            explains what information we collect from visitors to{" "}
            <span className="font-medium">sawtooth-roofing.com</span> and our marketing pages, how
            we use it, when we share it, and the choices you have. By using our website, calling
            us, or submitting a form, you agree to this Policy.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name, phone number, email address, and property address you submit through our forms</li>
            <li>SMS consent preferences (transactional and/or marketing)</li>
            <li>Photos or descriptions of your roof you share with us</li>
            <li>Insurance carrier and policy information you share for claim assistance</li>
            <li>Communications you send us (calls, texts, emails)</li>
          </ul>
          <p>We also collect information automatically when you visit our site:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address, browser type, device type, and operating system</li>
            <li>Pages visited, time on site, referring URL</li>
            <li>Cookies and similar tracking technologies (see Section 6)</li>
            <li>
              Analytics data via tools such as Google Analytics and advertising pixels such as
              Meta Pixel, which may be used to measure ad performance
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-10">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Schedule and conduct your roof inspection</li>
            <li>Communicate with you about your inspection, claim, or roofing project</li>
            <li>Send appointment reminders and claim status updates (transactional SMS)</li>
            <li>Send marketing messages, only if you have opted in (marketing SMS)</li>
            <li>Document storm damage and assist with insurance claim filings</li>
            <li>Improve our website, services, and marketing</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-10">3. SMS &amp; Text Messaging</h2>
          <p>
            If you opt in to receive text messages from Sawtooth Roofing, you consent to receive
            messages at the phone number provided. Message and data rates may apply. Message
            frequency varies.
          </p>
          <p>
            <strong>Transactional messages</strong> include appointment reminders, inspection
            confirmations, and claim status updates.{" "}
            <strong>Marketing messages</strong> include promotions, seasonal offers, and service
            updates, sent only with your separate explicit consent.
          </p>
          <p>
            You can opt out at any time by replying <strong>STOP</strong> to any message. Reply{" "}
            <strong>HELP</strong> for assistance. We do not share your mobile opt-in data or
            phone number with third parties for their marketing purposes.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">4. How We Share Information</h2>
          <p>
            <strong>We do not sell your personal information.</strong> We share it only as needed
            to provide our services or as required by law:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              With your insurance carrier or adjuster, when you ask us to assist with a claim
            </li>
            <li>
              With subcontractors, suppliers, or material vendors involved in completing your
              roofing project
            </li>
            <li>
              With service providers who help us operate our business (CRM, SMS, scheduling,
              analytics, payment processing) under confidentiality obligations
            </li>
            <li>When required by law, court order, or to protect our legal rights</li>
            <li>In connection with a business sale, merger, or transfer of assets</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-10">5. Data Retention</h2>
          <p>
            We keep your information as long as needed to provide our services, comply with
            legal obligations, resolve disputes, and enforce our agreements. Lead data from
            forms is generally retained for up to seven years to support warranty service and
            tax/business records. You may request deletion at any time (see Section 8).
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">6. Cookies &amp; Tracking</h2>
          <p>
            We use cookies and similar technologies to make our site work, remember preferences,
            measure traffic, and improve advertising. This may include Google Analytics, Meta
            (Facebook) Pixel, and similar tools. You can disable cookies in your browser
            settings, but parts of the site may not function correctly.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">7. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13, and we do not knowingly collect
            personal information from children under 13.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">8. Your Rights &amp; Choices</h2>
          <p>You can:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Opt out of marketing SMS by replying STOP</li>
            <li>Unsubscribe from marketing emails using the link in any email</li>
            <li>Request access to, correction of, or deletion of your personal information</li>
            <li>
              Decline to provide information, though some services may not be available without
              it
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:privacy@sawtooth-roofing.com" className="text-[#a01d25] font-medium hover:underline">
              privacy@sawtooth-roofing.com
            </a>{" "}
            or call (208) 398-3108.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">9. Security</h2>
          <p>
            We use reasonable safeguards to protect your information from unauthorized access or
            disclosure. No method of transmission over the internet is 100% secure, but we take
            it seriously.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">10. Changes to This Policy</h2>
          <p>
            We may update this Policy from time to time. We will post the new version here with
            an updated &ldquo;Last updated&rdquo; date. Material changes will be noted prominently.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-10">11. Contact Us</h2>
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
