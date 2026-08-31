"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SIKKIM_EVENT, isSikkimEventLive } from "@/lib/events";

const SESSION_KEY = "pai-sikkim-modal-shown";

export default function EventAnnouncementModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isSikkimEventLive()) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [open]);

  const handleRegister = () => {
    window.open(SIKKIM_EVENT.formUrl, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[400] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="relative w-full aspect-[197/146] bg-white">
              <Image
                src={SIKKIM_EVENT.image}
                alt={SIKKIM_EVENT.title}
                fill
                className="object-contain"
                sizes="384px"
              />
            </div>

            <div className="px-6 py-6 flex flex-col gap-4 text-center">
              <div>
                <h2
                  id="event-modal-title"
                  className="font-roboto-slab text-lg font-bold text-pai-navy leading-tight"
                >
                  Registration is Open!
                </h2>
                <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                  {SIKKIM_EVENT.title}. Secure your slot before entries close.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Maybe later
                </button>
                <button
                  onClick={handleRegister}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-pai-navy hover:bg-pai-navy-dark text-white text-sm font-semibold transition-colors"
                >
                  Register Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
