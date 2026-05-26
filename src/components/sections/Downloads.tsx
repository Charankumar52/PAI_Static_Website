import { FileText, ArrowDownToLine, FolderOpen, ExternalLink } from "lucide-react";
import { downloads } from "@/data/downloads";
import FadeUp from "@/components/ui/FadeUp";

export default function Downloads() {
  return (
    <section id="downloads" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <FadeUp className="text-center mb-12">
          <h2 className="font-roboto-slab text-2xl sm:text-3xl md:text-4xl font-bold text-pai-navy mb-4">
            Downloads
          </h2>
          <div className="w-16 h-1 bg-pai-sky mx-auto mb-6 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Official PAI documents, forms, and resources available for download.
          </p>
        </FadeUp>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {downloads.map((doc, i) => {
            const isFolder = !!doc.folder;
            return (
              <FadeUp key={doc.file} delay={i * 0.05}>
                <a
                  href={doc.file}
                  {...(!isFolder && { download: true })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-start gap-3 p-4 bg-white border rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-250 ${
                    isFolder
                      ? "border-pai-sky/30 hover:border-pai-sky/60 bg-gradient-to-br from-white to-sky-50/50"
                      : "border-gray-100 hover:border-pai-sky/40"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                      isFolder
                        ? "bg-pai-sky/10 group-hover:bg-pai-sky/20"
                        : "bg-red-50 group-hover:bg-red-100"
                    }`}
                  >
                    {isFolder ? (
                      <FolderOpen className="w-4 h-4 text-pai-sky" />
                    ) : (
                      <FileText className="w-4 h-4 text-red-500" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-pai-navy group-hover:text-pai-sky transition-colors duration-200 leading-snug">
                      {doc.title}
                    </p>
                    {doc.description && (
                      <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed line-clamp-2">
                        {doc.description}
                      </p>
                    )}
                    <span
                      className={`inline-block mt-1.5 text-[9px] font-semibold uppercase tracking-wider rounded-full px-2 py-0.5 ${
                        isFolder
                          ? "text-pai-sky bg-pai-sky/10"
                          : "text-gray-400 bg-gray-100"
                      }`}
                    >
                      {isFolder ? "Google Drive Folder" : "PDF"}
                    </span>
                  </div>

                  {/* Action button */}
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                      isFolder
                        ? "bg-pai-sky/10 group-hover:bg-pai-sky"
                        : "bg-gray-50 group-hover:bg-pai-navy"
                    }`}
                  >
                    {isFolder ? (
                      <ExternalLink className="w-3.5 h-3.5 text-pai-sky group-hover:text-white transition-colors duration-200" />
                    ) : (
                      <ArrowDownToLine className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                    )}
                  </div>
                </a>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
