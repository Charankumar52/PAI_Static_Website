"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Member } from "@/data/team";

const DEFAULT_PHOTO = "/images/gallery/default_image.jpg";

function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export default function MemberCard({ member }: { member: Member }) {
  const [open, setOpen] = useState(false);
  const photo = member.photo ?? DEFAULT_PHOTO;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      {/* ── Compact card ── */}
      <div
        className="group flex flex-col cursor-pointer select-none"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        aria-label={`View profile of ${member.name}`}
      >
        {/* Image */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100
                        ring-1 ring-transparent group-hover:ring-2 group-hover:ring-pai-sky/50
                        shadow-sm group-hover:shadow-xl transition-all duration-200">
          <Image
            src={photo}
            alt={member.name}
            fill
            className="object-contain object-center"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 text-pai-navy text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
              View
            </span>
          </div>
        </div>

        {/* Name & role below image */}
        <div className="pt-1.5 px-0.5">
          {member.role && (
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-pai-sky truncate leading-tight">
              {member.role}
            </p>
          )}
          <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight truncate">
            {member.name}
          </p>
        </div>
      </div>

      {/* ── Popup modal ── */}
      <Portal>
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

              <motion.div
                className="relative z-10 bg-white rounded-3xl overflow-hidden w-full max-w-[320px] sm:max-w-sm
                           shadow-2xl flex flex-col max-h-[90svh] sm:max-h-[85vh]"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/50
                             flex items-center justify-center hover:bg-black/70
                             transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* ── Image area — fixed, never shrinks ── */}
                <div className="relative h-52 sm:h-64 flex-shrink-0 overflow-hidden">
                  {/* Blurred fill layer */}
                  <Image
                    src={photo}
                    alt=""
                    fill
                    aria-hidden
                    className="object-cover scale-110 blur-lg opacity-70 brightness-75"
                    sizes="384px"
                  />
                  {/* Full, un-cropped image */}
                  <Image
                    src={photo}
                    alt={member.name}
                    fill
                    className="object-contain relative z-10"
                    sizes="(max-width: 640px) 320px, 384px"
                  />
                </div>

                {/* ── Info area — scrolls when content overflows ── */}
                <div className="overflow-y-auto overscroll-contain px-5 pt-4 pb-5">
                  {/* Role badge */}
                  {member.role && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                     text-pai-sky bg-pai-sky/10 rounded-full px-3 py-1 mb-3">
                      {member.role}
                    </span>
                  )}

                  {/* Name */}
                  <h3 className="font-roboto-slab text-xl font-bold text-pai-navy leading-tight">
                    {member.name}
                  </h3>

                  {/* Accent divider */}
                  <div className="w-10 h-0.5 bg-pai-sky rounded-full mt-2 mb-3" />

                  {/* Summary */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.summary ?? "PAI Team Member — 2025–27"}
                  </p>

                  {/* Footer */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pai-sky flex-shrink-0" />
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                      PAI Team 2025–27
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
