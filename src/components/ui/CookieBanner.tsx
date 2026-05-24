"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("pai-cookies-accepted")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("pai-cookies-accepted", "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-pai-navy border-t border-white/10 shadow-2xl"
          role="dialog"
          aria-label="Cookie notice"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-white/80 text-center sm:text-left">
              This site loads Facebook and X (Twitter) widgets which may set cookies from those platforms.
              By continuing you agree to our{" "}
              <Link href="/privacy-policy" className="text-white underline underline-offset-2 hover:text-white/80 transition-colors">
                Privacy Policy
              </Link>.
            </p>
            <button
              onClick={accept}
              className="flex-shrink-0 px-5 py-2 bg-white text-pai-navy font-semibold text-sm rounded-lg hover:bg-gray-100 active:scale-95 transition-all"
            >
              Got it
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
