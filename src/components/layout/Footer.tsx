import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-pai-navy text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/PAI_Logo.png"
              alt="PAI"
              width={200}
              height={82}
              className="h-16 w-auto brightness-0 invert"
            />
            <h3 className="font-roboto-slab font-semibold text-lg leading-snug">
              Paragliding Association Of India
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Reg. No. 500/Goa/2010
              <br />
              The Societies Registration Act, 1860
            </p>
            <address className="not-italic text-sm text-white/70 leading-relaxed">
              Nizari Bhavan, 5th Floor,
              <br />
              Menezes Braganza Road,
              <br />
              Panaji 403 001, Goa. INDIA
            </address>
          </div>

          {/* Legal column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white/90 uppercase tracking-wider text-xs">
              Legal
            </h4>
            <p className="text-sm text-white/70 leading-relaxed">
              By using this website, you confirm that you agree to our Terms of
              Use and have read our Privacy Policy.
            </p>
            <div className="flex gap-4 text-sm">
              <Link
                href="/terms-of-use"
                className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy-policy"
                className="text-white/70 hover:text-white underline underline-offset-2 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Connect column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white/90 uppercase tracking-wider text-xs">
              Connect with PAI
            </h4>
            <div className="flex gap-3">
              <a
                href="mailto:info@pgaoi.org"
                aria-label="Email PAI"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.facebook.com/ParaglidingAssociationOfIndia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PAI on Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="PAI on Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://x.com/pgaoi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PAI on X (Twitter)"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.627L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            <p className="text-xs text-white/50 mt-2">
              Official communication only via PAI email (@pgaoi.org) and our
              official Facebook page.
              <br />
              PAI does not operate any WhatsApp or Telegram accounts.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-white/50">
          © 2010–2025 Paragliding Association Of India. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
