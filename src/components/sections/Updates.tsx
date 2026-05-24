import { CheckCircle, ExternalLink } from "lucide-react";
import { updates } from "@/data/updates";
import FadeUp from "@/components/ui/FadeUp";

export default function Updates() {
  return (
    <section id="updates" className="bg-surface py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-10">
          <h2 className="font-roboto-slab text-2xl sm:text-3xl md:text-4xl font-bold text-pai-navy mb-4 uppercase tracking-wide">
            Updates
          </h2>
          <div className="w-16 h-1 bg-pai-sky mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            This section serves as{" "}
            <strong>PAI&apos;s official notification board</strong> for all
            updates, announcements, and important information. The only official
            modes of communication from PAI are emails sent from{" "}
            <strong>@pgaoi.org</strong> and posts on PAI&apos;s official
            Facebook page.{" "}
            <strong>PAI does not operate any WhatsApp or Telegram accounts.</strong>
          </p>
        </FadeUp>

        {/* Official notice */}
        <FadeUp delay={0.1}>
          <div className="bg-pai-navy/5 border border-pai-navy/20 rounded-xl p-5 mb-8 text-sm text-gray-700 leading-relaxed italic">
            <p className="mb-2">
              This website is the official online home of the Paragliding
              Association of India (PAI) till a full-fledged web platform is
              launched. PAI has no other active website hosted anywhere else.
            </p>
            <p className="mb-2">
              PAI is committed to presenting a full-fledged web portal very soon,
              featuring Membership Services, Insurance, and a dedicated online
              Pilot Rating System with streamlined data management and heightened
              security.
            </p>
            <p>
              All official updates and announcements will be published here and
              communicated through PAI&apos;s official email channels.
            </p>
          </div>
        </FadeUp>

        {/* Update list */}
        <div className="flex flex-col gap-4">
          {updates.map((update, i) => (
            <FadeUp key={update.id} delay={0.05 * i}>
              <div className="bg-white rounded-xl border border-gray-100 p-5 flex gap-4 hover:shadow-sm transition-shadow">
                <CheckCircle className="w-5 h-5 text-pai-sky flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start gap-2 mb-1">
                    {update.href ? (
                      <a
                        href={update.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-800 hover:text-pai-navy flex items-center gap-1 transition-colors text-sm sm:text-base"
                      >
                        {update.title}
                        <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                      </a>
                    ) : (
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {update.title}
                      </h4>
                    )}
                    <span className="text-xs text-white bg-pai-navy/70 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                      {update.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {update.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
