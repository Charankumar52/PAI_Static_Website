import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use – Paragliding Association Of India",
  description: "Terms of Use for the Paragliding Association of India website.",
};

export default function TermsOfUsePage() {
  return (
    <main className="flex-1 pt-16 md:pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-pai-navy transition-colors">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-gray-800 font-medium">Terms of Use</span>
        </nav>

        <h1 className="font-roboto-slab text-3xl sm:text-4xl font-bold text-pai-navy mb-2">
          Terms of Use
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          <strong>Updated:</strong> 25 November 2025
        </p>
        <div className="w-16 h-1 bg-pai-sky rounded-full mb-10" />

        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed text-sm sm:text-base">

          <p>
            These Terms of Use govern your access to and use of the Paragliding Association of India
            (PAI) website. By visiting or using this website, you agree to the conditions outlined
            below.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">1. Purpose of the Website</h2>
            <p>
              This website is provided by PAI solely for official communication, public information,
              and updates related to the organisation, its activities, and its services. No commercial
              transactions, logins, user accounts, or form submissions are available on this platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">2. Accuracy of Information</h2>
            <p className="mb-3">
              PAI strives to ensure that all information published on this website is accurate and up
              to date. However, all content is provided on an{" "}
              <strong>&ldquo;as available&rdquo; and &ldquo;as is&rdquo;</strong> basis, without
              warranties of any kind, whether express or implied.
            </p>
            <p className="mb-3">PAI does not guarantee:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>completeness, accuracy, reliability, or suitability of any information</li>
              <li>uninterrupted or error-free website operation</li>
              <li>that content will always reflect the most current updates</li>
            </ul>
            <p>PAI reserves the right to modify, update, or remove content without prior notice.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">
              3. Intellectual Property Rights
            </h2>
            <p className="mb-3">
              All materials on this website—including the PAI name, logo, graphics, documents, text,
              layout, and other content—are the intellectual property of the Paragliding Association
              of India unless otherwise stated.
            </p>
            <p className="mb-3">
              You may <strong>not</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>reproduce, republish, copy, modify, or distribute any content</li>
              <li>use PAI&apos;s identity (name/logo) in any form</li>
              <li>publish internal PAI information anywhere</li>
              <li>
                use PAI branding for unofficial communication, WhatsApp/Telegram groups, or social
                media pages
              </li>
            </ul>
            <p className="mb-3">
              Any such misuse constitutes a violation under Indian law, including:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
              <li>
                <strong>Information Technology Act, 2000</strong>
              </li>
              <li>
                <strong>Copyright laws of India</strong>
              </li>
              <li>Other applicable digital communication laws</li>
            </ul>
            <p className="italic text-gray-500 text-sm border-l-2 border-gray-200 pl-4">
              Some images used on this website are sourced from <strong>Pixabay</strong> under their
              free-to-use content license. These images are not the property of PAI, and all rights
              remain with their respective creators as per Pixabay&apos;s licensing terms. Such
              images are used only for illustrative and non-commercial purposes. PAI does not claim
              ownership over any third-party images.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">3A. Official PAI Domains</h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>paraglidingassociationofindia.org</li>
              <li>paraglidingassociationofindia.com</li>
              <li>paraglidingassociationofindia.in</li>
              <li>pgaoi.org</li>
              <li>pgaoi.com</li>
              <li>pgaoi.in</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">4. External Links</h2>
            <p className="mb-3">
              This website may include links to external websites for informational purposes. PAI
              does <strong>not</strong> control, endorse, or guarantee:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>the content of external sites</li>
              <li>the privacy practices of those platforms</li>
              <li>their security, cookies, or tracking behaviour</li>
            </ul>
            <p>
              When you access an external link, you do so at your own discretion. PAI is not
              responsible for any consequences, data usage, or interactions on third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">5. Limited Liability</h2>
            <p className="mb-3">PAI shall not be liable for:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>any loss, damage, or inconvenience resulting from use of the website</li>
              <li>reliance on published information</li>
              <li>temporary unavailability of the website</li>
              <li>outcomes of visiting external links</li>
              <li>errors, omissions, typographical mistakes, or outdated information</li>
            </ul>
            <p>Use of this website is entirely at your own risk.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">
              6. Security &amp; Website Protection
            </h2>
            <p className="mb-3">This website is protected using:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>an application-layer firewall</li>
              <li>brute-force protection</li>
              <li>network-level filtering</li>
              <li>Cloudflare security layers</li>
              <li>server-level hardening and best practices</li>
            </ul>
            <p>
              Despite these protections, no website can guarantee absolute security. PAI shall not
              be held responsible for any unauthorized access attempts, cyberattacks, or disruptions
              beyond its reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">
              7. Security Incidents &amp; Notifications
            </h2>
            <p className="mb-3">
              In the event of any attempted, suspected, or confirmed security incident or data
              exposure involving this website or associated systems, PAI will take reasonable steps
              to assess the issue and act in accordance with applicable Indian laws and internal
              protocols. If required, PAI will notify the concerned governing authorities and
              communicate relevant information to the PAI community.
            </p>
            <p>
              All official security-related notifications, if any, will be issued{" "}
              <strong>only via PAI&apos;s official email communication</strong> and posted on this
              website. PAI shall not be responsible for misinformation or announcements circulated
              through unofficial platforms or third-party groups.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">
              8. No Official Communications via WhatsApp or Telegram
            </h2>
            <p>
              PAI does not operate or endorse any WhatsApp groups, Telegram channels, or similar
              platforms for official communication. Any such groups claiming affiliation with PAI
              should be treated as <strong>unofficial</strong> unless otherwise announced on this
              website or via PAI&apos;s official email or Facebook page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">9. Changes to Terms</h2>
            <p>
              PAI may revise these Terms of Use at any time without prior notice. Your continued use
              of the website constitutes acceptance of any updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes arising from the use of
              this website fall under the jurisdiction of competent courts located in{" "}
              <strong>Goa</strong> or as per PAI&apos;s registered jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">11. Contact</h2>
            <p>
              For questions regarding these Terms, please contact PAI via the official email address{" "}
              <a
                href="mailto:info@pgaoi.org"
                className="text-pai-sky hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pai-sky rounded"
              >
                info@pgaoi.org
              </a>
              .
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="text-sm font-medium text-pai-navy hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pai-navy rounded"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
