import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paraglidingassociationofindia.org"),
  title: "Paragliding Association Of India (PAI) – National Sports Association of Paragliding in India",
  description:
    "PAI is the National Sports Association of Paragliding in India — of pilots, by pilots, for pilots. Formed in 2010, registered in Goa. Membership, Insurance, Pilot Ratings.",
  keywords: [
    "paragliding india",
    "PAI",
    "paragliding association",
    "pilot rating",
    "paragliding insurance",
    "paragliding membership",
  ],
  openGraph: {
    title: "Paragliding Association Of India (PAI)",
    description:
      "National Sports Association of Paragliding in India — of pilots, by pilots, for pilots.",
    url: "https://paraglidingassociationofindia.org",
    siteName: "Paragliding Association Of India",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paragliding Association Of India (PAI)",
    description: "National Sports Association of Paragliding in India.",
    site: "@pgaoi",
  },
  icons: {
    icon: "/images/logo fav.png",
    shortcut: "/images/logo fav.png",
    apple: "/images/logo fav.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-pai-navy focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header />
        <div id="main-content" className="flex flex-col flex-1">
          {children}
        </div>
        <Footer />
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
