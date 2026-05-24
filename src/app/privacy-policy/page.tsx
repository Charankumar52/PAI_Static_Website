import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – Paragliding Association Of India",
  description: "Privacy Policy for the Paragliding Association of India website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 pt-16 md:pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-pai-navy transition-colors">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-gray-800 font-medium">Privacy Policy</span>
        </nav>

        <h1 className="font-roboto-slab text-3xl sm:text-4xl font-bold text-pai-navy mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          <strong>Updated:</strong> 27 November 2025
        </p>
        <div className="w-16 h-1 bg-pai-sky rounded-full mb-10" />

        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed text-sm sm:text-base">

          <p>
            This Privacy Policy describes how the Paragliding Association of India (PAI) manages
            information on this website and outlines the technical, operational, and legal measures
            in place to ensure the responsible handling of data.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Who We Are</h2>
            <p className="mb-3">
              The Paragliding Association of India (PAI) manages and operates this website. PAI is
              responsible for all information published on this platform.
            </p>
            <p>
              This website does <strong>not</strong> collect personal data from visitors. There are{" "}
              <strong>no</strong> user accounts, login systems, comment features, payment gateways,
              or forms enabled that capture personal information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Data Collection and Logging</h2>
            <p className="mb-3">
              While this website does not request or store personal information, standard{" "}
              <strong>server-level logs</strong> may record non-identifiable technical data, such as:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Timestamp of access</li>
              <li>Pages requested</li>
            </ul>
            <p>
              These logs are generated automatically by the hosting environment as part of essential
              website operations and security monitoring. Logs are retained only for the duration
              required for security, diagnostics, and compliance with standard operational practices.
              They are <strong>not</strong> analyzed for marketing, tracking, or profiling.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">
              Transport Layer Security (TLS)
            </h2>
            <p>
              All communication between your browser and this website is protected using{" "}
              <strong>HTTPS</strong> with industry-standard TLS encryption. This ensures that data
              transmitted between your device and the server remains secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Comments</h2>
            <p>
              This website does <strong>not</strong> allow comments. Therefore, no comment data, IP
              addresses, or browser details related to comment activity are collected or processed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Media</h2>
            <p>
              Visitors cannot upload media to this website. No EXIF or location-based metadata can
              be uploaded, stored, or extracted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Cookies</h2>
            <p className="mb-3">
              This website uses only minimal, essential cookies required for basic site functionality
              and security. These cookies do <strong>not</strong> collect personal data and are not
              used for marketing, advertising, or user profiling.
            </p>
            <p>
              If analytics tools are added in the future (such as Google Analytics), they will be
              configured with privacy-focused settings and will not collect personally identifiable
              information. No advertising trackers such as Google Ads or Meta Pixels are used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Embedded Content</h2>
            <p>
              This website currently does not include embedded content from external services. If any
              external content (such as videos or maps) is added in the future, it may behave as if
              the visitor has accessed the external site directly and may be subject to that
              site&apos;s privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">External Links</h2>
            <p className="mb-3">
              This website may include links to external websites for reference or informational
              purposes. PAI does <strong>not</strong> control these external platforms and cannot
              guarantee their security, privacy policies, or data-handling practices.
            </p>
            <p className="mb-3">
              When you click an external link, you are leaving the PAI website. The destination site
              may collect data, use cookies, or implement tracking technologies according to its own
              privacy policy. Visitors are responsible for reviewing the privacy practices and terms
              of any external website they choose to access.
            </p>
            <p>
              PAI does not endorse, verify, or guarantee the safety, accuracy, or reliability of
              external websites. Accessing such links is entirely at the user&apos;s discretion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Security Measures</h2>
            <p className="mb-3">
              PAI employs multiple technical safeguards to protect the website, including:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Application-layer firewall protections</li>
              <li>Brute-force protection and login attempt monitoring</li>
              <li>Malicious traffic filtering</li>
              <li>Server-level security hardening</li>
              <li>Least-privilege access controls for administrators</li>
            </ul>
            <p>
              This website is also protected by <strong>Cloudflare</strong>, providing an additional
              layer of network-level security, DDoS mitigation, and traffic filtering.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">
              Data Sharing and Third Parties
            </h2>
            <p className="mb-3">
              PAI does <strong>not</strong> share personal data with any third parties.
            </p>
            <p>
              This website is hosted on a{" "}
              <strong>third-party managed cloud platform</strong>, which provides standard
              infrastructure-level protections and complies with modern hosting security practices.
              No personal data is processed or stored by the hosting provider on behalf of PAI.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Data Retention</h2>
            <p className="mb-3">
              Since this website does not collect personal information, no personal data is stored.
            </p>
            <p className="mb-3">Technical server logs may be retained temporarily for:</p>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-2">
              <li>Security monitoring</li>
              <li>Diagnostics</li>
              <li>System stability</li>
            </ul>
            <p>
              Logs are not used for advertising, profiling, or user tracking, and are deleted as
              part of regular server maintenance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Your Rights</h2>
            <p className="mb-3">
              As this website does not store personal information, there is no personal data to
              access, export, or delete.
            </p>
            <p>
              Any personal communication sent to PAI via email is handled separately through secure
              internal channels and is never stored on this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Legal Compliance</h2>
            <p className="mb-3">
              PAI adheres to applicable Indian laws governing digital platforms, including:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong>Information Technology Act, 2000</strong>
              </li>
              <li>
                <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>, to the extent
                applicable to websites that do not process personal data
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Future Updates</h2>
            <p>
              PAI may modify this Privacy Policy if the website evolves to include new features such
              as forms, analytics, or interactive services. Any changes will be reflected on this
              page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-pai-navy mb-3">Contact</h2>
            <p>
              If you wish to contact PAI for any privacy-related query, please reach us via our
              official email address{" "}
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
