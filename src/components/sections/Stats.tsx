"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

const stats: StatItem[] = [
  { label: "Members", value: 1800, suffix: "+" },
  { label: "Schools", value: 23 },
  { label: "State Associations", value: 13 },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (timerRef.current) clearInterval(timerRef.current);

        if (entry.isIntersecting) {
          setCount(0);
          let step = 0;
          const steps = 60;
          timerRef.current = setInterval(() => {
            step++;
            setCount(Math.min(Math.round((value / steps) * step), value));
            if (step >= steps) clearInterval(timerRef.current!);
          }, 2000 / steps);
        } else {
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const reduced = useReducedMotion();

  return (
    <section className="relative py-16 md:py-20 text-white overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/Gemini_Generated_Image_1.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-pai-navy/80" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <svg className="w-8 h-8 text-white/60" viewBox="0 0 512 512" fill="currentColor">
              <path d="M224,192a16,16,0,1,0,16,16A16,16,0,0,0,224,192ZM466.5,83.68l-192-80A57.4,57.4,0,0,0,256.05,0a57.4,57.4,0,0,0-18.46,3.67l-192,80A47.93,47.93,0,0,0,16,128C16,326.5,130.5,463.72,237.5,508.32a48.09,48.09,0,0,0,36.91,0C360.09,472.61,496,349.3,496,128A48,48,0,0,0,466.5,83.68Z" />
            </svg>
            <h2 className="font-roboto-slab text-2xl sm:text-3xl font-bold">
              15 Years of PAI
            </h2>
          </div>
          <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto">
            A decade and a half of growing India&apos;s paragliding community,
            safely and sustainably.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 font-roboto-slab">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/70 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
