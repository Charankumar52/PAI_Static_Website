"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import PortalModal from "@/components/ui/PortalModal";

const navLinks = [
  { label: "Home",       href: "/",            sectionId: "" },
  { label: "Membership", href: "/#membership", sectionId: "membership" },
  { label: "Downloads",  href: "/#downloads",  sectionId: "downloads" },
  { label: "Team",       href: "/#team",       sectionId: "team" },
  { label: "Updates",    href: "/#social",     sectionId: "social" },
  { label: "About",      href: "/#about",      sectionId: "about" },
  { label: "Contact",    href: "/#contact",    sectionId: "contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setPastHero(window.scrollY > window.innerHeight * 0.85);
      if (window.scrollY < 80) setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.sectionId).filter(Boolean);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Dark scrim over hero — fades out once past hero */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none transition-opacity duration-200"
          style={{ opacity: pastHero ? 0 : 1 }}
        />
        {/* White background — fades in after hero */}
        <div
          className="absolute inset-0 bg-white pointer-events-none transition-opacity duration-200"
          style={{ opacity: pastHero ? 1 : 0, boxShadow: pastHero ? "0 1px 6px rgba(0,0,0,0.10)" : "none" }}
        />
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-18 md:h-22">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 self-stretch flex items-center py-1" onClick={closeMobile}>
              <Image
                src="/images/PAI_Logo.png"
                alt="Paragliding Association Of India"
                width={220}
                height={90}
                priority
                className={`h-full w-auto transition-all duration-200 ${!pastHero ? "brightness-0 invert" : ""}`}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pai-navy ${
                    !pastHero
                      ? isActive(link.sectionId)
                        ? "text-white font-semibold bg-white/20"
                        : "text-white/90 hover:text-white hover:bg-white/15"
                      : isActive(link.sectionId)
                        ? "text-pai-navy font-semibold bg-pai-navy/8"
                        : "text-gray-700 hover:text-pai-navy hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                  {isActive(link.sectionId) && (
                    <span className={`block h-0.5 rounded-full mt-0.5 mx-auto w-4/5 ${!pastHero ? "bg-white" : "bg-pai-sky"}`} />
                  )}
                </a>
              ))}
              {/* Portal button — uncomment when portal is ready
              <button
                onClick={() => setPortalOpen(true)}
                className="ml-2 px-4 py-2 text-sm font-semibold text-pai-red hover:text-pai-red-dark border border-pai-red hover:border-pai-red-dark rounded-md transition-colors duration-200"
              >
                Portal
              </button>
              */}
            </nav>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 rounded-md transition-all duration-200 ${!pastHero ? "text-white hover:bg-white/15" : "text-gray-700 hover:text-pai-navy hover:bg-gray-100"}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        <div
          className={`relative z-10 md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
            mobileOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
          }`}
          aria-hidden={!mobileOpen}
          inert={!mobileOpen || undefined}
        >
          <nav className="bg-white px-4 pb-4 pt-2 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className={`px-3 py-3 text-base font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pai-navy ${
                  isActive(link.sectionId)
                    ? "text-pai-navy font-semibold bg-pai-navy/5"
                    : "text-gray-700 hover:text-pai-navy hover:bg-gray-50"
                }`}
              >
                {link.label}
              </a>
            ))}
            {/* Portal button — uncomment when portal is ready
            <button
              onClick={() => { closeMobile(); setPortalOpen(true); }}
              className="mt-1 px-3 py-3 text-base font-semibold text-pai-red hover:bg-red-50 rounded-md text-left transition-colors"
            >
              Portal
            </button>
            */}
          </nav>
        </div>
      </header>

      <PortalModal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
        portalUrl="https://portal.paraglidingassociationofindia.org/login"
      />
    </>
  );
}
