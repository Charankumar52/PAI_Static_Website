"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  portalUrl: string;
}

export default function PortalModal({
  isOpen,
  onClose,
  portalUrl,
}: PortalModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleContinue = () => {
    onClose();
    window.open(portalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal box */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="w-12 h-12 rounded-full bg-pai-navy/10 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-6 h-6 text-pai-navy"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>

        <h3
          id="portal-modal-title"
          className="text-lg font-bold text-pai-navy mb-2"
        >
          PAI Member Portal
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          You are being redirected to
        </p>
        <p className="text-sm font-semibold text-pai-navy mb-3 break-all">
          portal.paraglidingassociationofindia.org
        </p>
        <p className="text-xs text-gray-500 mb-6">
          Terms and Privacy Policy of the portal apply at the landing site.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleContinue}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-pai-navy hover:bg-pai-navy-dark rounded-lg transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
