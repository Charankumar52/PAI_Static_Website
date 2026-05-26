"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

// ─── Instagram live feed ───────────────────────────────────────────────────────
// 1. Go to https://behold.so and sign up (free)
// 2. Connect your @pai_paragliding Instagram account
// 3. Create a feed widget → copy the Widget ID from the embed code
// 4. Replace null with your widget ID e.g. "AbCdEf123456"
const BEHOLD_WIDGET_ID: string | null = null;
// ──────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    FB?: { XFBML: { parse: (node?: Element | null) => void } };
    twttr?: {
      widgets: {
        createTimeline: (
          source: { sourceType: string; screenName: string },
          el: HTMLElement,
          options: Record<string, unknown>
        ) => Promise<HTMLElement | undefined>;
      };
    };
  }
}

function SkeletonOverlay() {
  return (
    <div className="absolute inset-0 z-10 bg-gray-50 rounded-xl">
      <div className="animate-pulse h-full flex flex-col gap-3 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
          <div className="flex-1">
            <div className="h-3 bg-gray-200 rounded w-2/3 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-1/3" />
          </div>
        </div>
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
        <div className="h-3 bg-gray-200 rounded w-4/5" />
        <div className="flex-1 bg-gray-200 rounded-lg" />
        <div className="h-3 bg-gray-200 rounded w-full mt-2" />
        <div className="h-3 bg-gray-200 rounded w-3/4" />
      </div>
    </div>
  );
}

export default function SocialFeed() {
  const fbContainerRef = useRef<HTMLDivElement>(null);
  const twitterRef = useRef<HTMLDivElement>(null);

  const [fbLoaded, setFbLoaded] = useState(false);
  const [twitterLoaded, setTwitterLoaded] = useState(false);
  const [twitterHasPosts, setTwitterHasPosts] = useState(false);

  useEffect(() => {
    // ── Facebook ──────────────────────────────────────────────────────────────
    // Remove skeleton after 4s — FB renders underneath it regardless
    const fbFallback = setTimeout(() => setFbLoaded(true), 4000);

    if (!document.getElementById("facebook-jssdk")) {
      const s = document.createElement("script");
      s.id = "facebook-jssdk";
      s.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0";
      s.async = true;
      s.defer = true;
      s.crossOrigin = "anonymous";
      document.head.appendChild(s);
    } else {
      window.FB?.XFBML.parse();
    }

    // ── Twitter / X ───────────────────────────────────────────────────────────
    // createTimeline into a persistent ref div.
    // Resolves with element → has posts. Resolves with undefined / rejects → no posts yet.
    const renderTwitter = async () => {
      if (!twitterRef.current || !window.twttr) return;
      twitterRef.current.innerHTML = "";
      try {
        const el = await window.twttr.widgets.createTimeline(
          { sourceType: "profile", screenName: "pgaoi" },
          twitterRef.current,
          { height: 600, theme: "light", chrome: "noheader nofooter noborders" }
        );
        setTwitterHasPosts(!!el);
      } catch {
        setTwitterHasPosts(false);
      }
      setTwitterLoaded(true);
    };

    if (window.twttr) {
      renderTwitter();
    } else if (!document.getElementById("twitter-wjs")) {
      const s = document.createElement("script");
      s.id = "twitter-wjs";
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      s.setAttribute("charset", "utf-8");
      s.onload = renderTwitter;
      document.head.appendChild(s);
    }
    // Fallback: if Twitter script never loads, stop showing skeleton after 8s
    const twFallback = setTimeout(() => setTwitterLoaded(true), 8000);

    // ── Instagram (Behold.so) ─────────────────────────────────────────────────
    if (BEHOLD_WIDGET_ID && !document.getElementById("behold-widget-js")) {
      const s = document.createElement("script");
      s.id = "behold-widget-js";
      s.src = "https://w.behold.so/widget.js";
      s.type = "module";
      s.async = true;
      document.head.appendChild(s);
    }

    return () => {
      clearTimeout(fbFallback);
      clearTimeout(twFallback);
    };
  }, []);

  return (
    <section id="social" className="bg-white py-12 md:py-16">
      <div id="fb-root" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-10">
          <h2 className="font-roboto-slab text-2xl sm:text-3xl md:text-4xl font-bold text-pai-navy mb-4 uppercase tracking-wide">
            Follow Us
          </h2>
          <div className="w-16 h-1 bg-pai-sky mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Stay connected with PAI&apos;s latest news, events, and announcements
            across our official social media channels.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* ── Facebook ── */}
          <FadeUp delay={0.1} className="flex flex-col items-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Facebook
            </p>
            {/* Widget renders normally; skeleton overlay fades out once FB fires */}
            <div
              ref={fbContainerRef}
              className="relative w-full rounded-xl overflow-hidden border border-gray-100 shadow-sm"
              style={{ minHeight: 600 }}
            >
              {!fbLoaded && <SkeletonOverlay />}
              <div
                className="fb-page w-full"
                data-href="https://www.facebook.com/ParaglidingAssociationOfIndia/"
                data-tabs="timeline"
                data-width="380"
                data-height="600"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
              />
            </div>
          </FadeUp>

          {/* ── Twitter / X ── */}
          <FadeUp delay={0.2} className="flex flex-col items-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              X (Twitter)
            </p>
            {/* Single persistent div — Twitter iframe always appended here */}
            <div
              className="relative w-full rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              style={{ minHeight: 600 }}
            >
              <div ref={twitterRef} style={{ minHeight: 600 }} />

              {/* Skeleton until script resolves */}
              {!twitterLoaded && <SkeletonOverlay />}

              {/* Placeholder when loaded but no posts yet */}
              {twitterLoaded && !twitterHasPosts && (
                <a
                  href="https://x.com/pgaoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gray-50 p-8 text-center hover:bg-gray-100 transition-colors"
                >
                  <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.627L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg mb-1">@pgaoi</p>
                    <p className="text-sm text-gray-500">
                      We&apos;re just getting started on X. Our live feed will appear here once we start posting.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-black px-4 py-2 rounded-full">
                    Follow on X
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              )}
            </div>
          </FadeUp>

          {/* ── Instagram ── */}
          <FadeUp delay={0.3} className="flex flex-col items-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Instagram
            </p>
            {BEHOLD_WIDGET_ID ? (
              <div className="w-full rounded-xl border border-gray-100 shadow-sm overflow-hidden" style={{ minHeight: 600 }}>
                {/* @ts-expect-error behold custom element */}
                <behold-widget feed-id={BEHOLD_WIDGET_ID} />
              </div>
            ) : (
              <a
                href="https://www.instagram.com/pai_paragliding/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl border border-gray-100 shadow-sm overflow-hidden group"
                style={{ height: 600 }}
              >
                <div className="h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 p-8 text-center transition-colors group-hover:from-[#833ab4]/20 group-hover:via-[#fd1d1d]/20 group-hover:to-[#fcb045]/20">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg mb-1">@pai_paragliding</p>
                    <p className="text-sm text-gray-500">
                      Follow us on Instagram for photos and reels from our events
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-gradient-to-r from-[#833ab4] to-[#fd1d1d] px-4 py-2 rounded-full mt-2 group-hover:opacity-90 transition-opacity">
                    View on Instagram
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            )}
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
