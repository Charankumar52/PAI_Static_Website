"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Shield, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CryptoJS from "crypto-js";

const AES_KEY = CryptoJS.enc.Utf8.parse("z5yK1lw7XYt6YKdP7Pne2Jw3zRkMAziH");
const AES_IV  = CryptoJS.enc.Utf8.parse("i0kbCAlFTlDXshYV");
const PORTAL_TOKEN = "aVVpWTN3U3c4cEV0N291S0dNOHpTZz09OjpZc7HVn73COqg8IrvrkXF6";

function encrypt(value: string): string {
  const encrypted = CryptoJS.AES.encrypt(value, AES_KEY, { iv: AES_IV }).toString();
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encrypted));
}

function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function InsuranceBookingModal({ isOpen, onClose }: Props) {
  const [mobile, setMobile] = useState("");
  const [email, setEmail]   = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors]   = useState<{ mobile?: string; email?: string }>({});

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const validate = () => {
    const e: typeof errors = {};
    if (!/^\d{10}$/.test(mobile.trim())) e.mobile = "Enter a valid 10-digit mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const url = `https://partners.careinsurance.com/portals/pai/index.php?token=${PORTAL_TOKEN}&tel_no=${encrypt(mobile.trim())}&email=${encrypt(email.trim())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setLoading(false);
    onClose();
  };

  const handleClose = () => {
    setMobile("");
    setEmail("");
    setErrors({});
    onClose();
  };

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div
              className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-pai-navy px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-roboto-slab text-lg font-bold text-white leading-tight">
                      Book Insurance
                    </h2>
                    <p className="text-white/60 text-xs mt-0.5">Powered by CARE Insurance</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Body */}
              <form onSubmit={handleSubmit} noValidate className="px-6 py-6 flex flex-col gap-5">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Enter your details below. You will be redirected to the CARE Insurance portal to complete your booking.
                </p>

                {/* Mobile */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ins-mobile" className="text-sm font-semibold text-gray-700">
                    Mobile Number <span className="text-pai-red">*</span>
                  </label>
                  <input
                    id="ins-mobile"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value.replace(/\D/g, ""));
                      setErrors((prev) => ({ ...prev, mobile: undefined }));
                    }}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors
                      ${errors.mobile
                        ? "border-red-400 bg-red-50 focus:border-red-500"
                        : "border-gray-200 bg-gray-50 focus:border-pai-sky focus:bg-white"}`}
                  />
                  {errors.mobile && (
                    <p className="text-xs text-red-500">{errors.mobile}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ins-email" className="text-sm font-semibold text-gray-700">
                    Email Address <span className="text-pai-red">*</span>
                  </label>
                  <input
                    id="ins-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors
                      ${errors.email
                        ? "border-red-400 bg-red-50 focus:border-red-500"
                        : "border-gray-200 bg-gray-50 focus:border-pai-sky focus:bg-white"}`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-4 py-2.5 rounded-lg bg-pai-navy hover:bg-pai-navy-dark text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                    Proceed to Portal
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
