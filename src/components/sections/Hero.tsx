"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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
          // Hold for ~7s then repeat — total cycle ≈ 10s
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
      className="text-xl sm:text-2xl md:text-3xl font-light italic text-white/90 mb-10 tracking-wide min-h-[2rem]"
    >
      {displayed}
      {cursorOn && (
        <span className="inline-block w-0.5 h-6 bg-white/70 ml-0.5 align-middle animate-pulse" />
      )}
    </motion.p>
  );
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const child = reduced ? itemReduced : item;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/Gemini_Generated_Image_2.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — dark enough for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(14,47,61,0.88) 0%, rgba(20,66,85,0.78) 40%, rgba(30,107,138,0.65) 75%, rgba(42,138,181,0.50) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto pt-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={child}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-white/80 mb-8"
        >
          Est. 2010 &nbsp;·&nbsp; Registered in Goa
        </motion.div>

        <motion.h1
          variants={child}
          className="font-roboto-slab text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 drop-shadow-lg"
        >
          Paragliding Association
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal">
            Of India
          </span>
        </motion.h1>

        <TypewriterTagline reduced={reduced} />

        <motion.div
          variants={child}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#membership"
            className="inline-block px-8 py-3.5 bg-white text-pai-navy font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
          >
            Become a Member
          </a>
          <a
            href="#updates"
            className="inline-block px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-sm sm:text-base"
          >
            Latest Updates
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
