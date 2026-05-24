"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const images: GalleryImage[] = [
  {
    src: "/images/gallery/sikkim-paragliding-accuracy-cup-2025.svg",
    alt: "Sikkim Paragliding Accuracy Cup November 2025",
    caption: "Sikkim Paragliding Accuracy Cup – November 2025",
  },
  {
    src: "/images/gallery/reserve-packing-workshop-2025.svg",
    alt: "Reserve Packing Workshop October 2025",
    caption: "Reserve Packing Workshop – October 2025",
  },
  {
    src: "/images/gallery/pai-insurance-2025.svg",
    alt: "PAI Insurance 2025",
    caption: "PAI Insurance – September 2025",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const reduced = useReducedMotion();

  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () =>
    setLightbox((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-pai-navy focus:ring-offset-2"
              aria-label={`View: ${img.caption}`}
              initial={{ opacity: 0, scale: reduced ? 1 : 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-pai-navy/0 group-hover:bg-pai-navy/40 transition-colors duration-300 flex items-end">
                <p className="w-full text-white text-xs font-medium p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {img.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-3 sm:left-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-3 sm:right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          <div
            className="relative max-w-3xl w-full max-h-[80vh] aspect-square"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-white/80 text-sm">
            {images[lightbox].caption}
          </p>
        </div>
      )}
    </section>
  );
}
