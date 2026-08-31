"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SIKKIM_EVENT, isSikkimEventLive } from "@/lib/events";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const itemReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const TAGLINE = "of pilots… by pilots… for pilots";

function TypewriterTagline({ reduced }: { reduced: boolean }) {
  const [displayed, setDisplayed] = useState(reduced ? TAGLINE : "");
  const [cursorOn, setCursorOn] = useState(!reduced);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (reduced) return;

    let active = true;
    let isInView = true;
    let cycleTimeout: ReturnType<typeof setTimeout>;
    let typingInterval: ReturnType<typeof setInterval>;

    const clearAll = () => {
      clearTimeout(cycleTimeout);
      clearInterval(typingInterval);
    };

    const runCycle = () => {
      clearAll();
      if (!active || !isInView) return;
      setDisplayed("");
      setCursorOn(true);
      let i = 0;
      typingInterval = setInterval(() => {
        i++;
        setDisplayed(TAGLINE.slice(0, i));
        if (i >= TAGLINE.length) {
          clearInterval(typingInterval);
          cycleTimeout = setTimeout(runCycle, 7000);
        }
      }, 90);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasInView = isInView;
        isInView = entry.isIntersecting;
        if (!isInView) {
          clearAll();
          setDisplayed("");
          setCursorOn(false);
        } else if (!wasInView) {
          cycleTimeout = setTimeout(runCycle, 400);
        }
      },
      { threshold: 0.3 }
    );

    if (pRef.current) observer.observe(pRef.current);
    runCycle();

    return () => {
      active = false;
      clearAll();
      observer.disconnect();
    };
  }, [reduced]);

  return (
    <motion.p
      ref={pRef}
      variants={reduced ? itemReduced : item}
      className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light italic text-white/90 mb-8 sm:mb-10 tracking-wide min-h-[1.5rem]"
    >
      {displayed}
      {cursorOn && (
        <span className="inline-block w-0.5 h-5 sm:h-6 bg-white/70 ml-0.5 align-middle animate-pulse" />
      )}
    </motion.p>
  );
}

function EventBadge() {
  const [live, setLive] = useState(false);

  useEffect(() => {
    setLive(isSikkimEventLive());
  }, []);

  if (!live) return null;

  return (
    <motion.a
      href={SIKKIM_EVENT.formUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      className="group inline-flex items-center gap-3 bg-white/40 hover:bg-white/60 backdrop-blur-md rounded-2xl pr-4 pl-2 py-2 shadow-xl transition-colors pointer-events-auto"
    >
      <span className="relative h-16 sm:h-20 aspect-[197/146] rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={SIKKIM_EVENT.image}
          alt=""
          fill
          className="object-contain"
          sizes="110px"
        />
      </span>
      <span className="text-left leading-tight">
        <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-pai-red">
          Registration Open
        </span>
        <span className="block text-sm sm:text-base font-semibold text-pai-navy">
          Sikkim Paragliding
          <br />
          Accuracy Cup
          <span className="ml-1.5 text-pai-navy/50 group-hover:translate-x-0.5 inline-block transition-transform">
            →
          </span>
        </span>
      </span>
    </motion.a>
  );
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const child = reduced ? itemReduced : item;

  return (
    <section className="relative min-h-[100svh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/PAI_Homepage.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Subtle veil — keeps background visible but improves text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Event announcement — top-center, below the header */}
      <div className="absolute inset-x-0 top-[84px] md:top-[104px] z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 flex justify-center">
          <EventBadge />
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-5 sm:px-6 max-w-4xl mx-auto pt-20 pb-16"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={child}
          className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white mb-4"
        >
          Est. 2010 &nbsp;·&nbsp; Registered in Goa
        </motion.div>

        {/* Title — wraps naturally on mobile, single line on sm+ */}
        <motion.h1
          variants={child}
          className="font-roboto-slab text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:whitespace-nowrap [text-shadow:0_2px_16px_rgba(0,0,0,0.9),0_1px_4px_rgba(0,0,0,0.7)]"
        >
          Paragliding Association Of India
        </motion.h1>

        <TypewriterTagline reduced={reduced} />

        <motion.div
          variants={child}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#membership"
            className="inline-block px-7 py-3.5 bg-white text-pai-navy font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
          >
            Become a Member
          </a>
          <a
            href="#social"
            className="inline-block px-7 py-3.5 bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-lg hover:bg-white/25 transition-colors text-sm sm:text-base"
          >
            Latest Updates
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
