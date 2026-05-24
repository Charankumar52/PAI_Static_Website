import { Users, Shield, IdCard, CheckCircle } from "lucide-react";
import { insuranceTiers, insuranceFeatures } from "@/data/membership";
import FadeUp from "@/components/ui/FadeUp";

export default function Membership() {
  return (
    <section id="membership" className="bg-surface py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <h2 className="font-roboto-slab text-2xl sm:text-3xl md:text-4xl font-bold text-pai-navy mb-4">
            PAI Membership, Insurance &amp; Pilot Rating
          </h2>
          <div className="w-16 h-1 bg-pai-sky mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            PAI supports the pilot community through structured membership
            services, reliable insurance options, and a nationally recognised
            pilot rating framework. These systems help ensure safe flying
            practices, maintain skill standards, and provide essential support
            for pilots across all levels.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Membership card */}
          <FadeUp delay={0.05}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 flex flex-col gap-5 h-full">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-pai-navy/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-pai-navy" />
                </div>
                <h3 className="font-roboto-slab text-xl font-bold text-pai-navy">
                  Membership
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                PAI offers membership to individual pilots, paragliding schools,
                and affiliated clubs and associations. Membership helps support
                safety standards, unified pilot ratings, and community development
                across the sport.
              </p>

              <div className="flex flex-col gap-3">
                {/* Individual */}
                <div className="rounded-xl border border-gray-100 bg-surface p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        Individual Membership
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        + ₹300 one-time joining fee
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Annual Fee
                      </p>
                      <p className="text-2xl font-bold text-pai-navy">₹500</p>
                    </div>
                  </div>
                </div>

                {/* School */}
                <div className="rounded-xl border border-gray-100 bg-surface p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        School Membership
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        + ₹5,000 one-time joining fee
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Annual Fee
                      </p>
                      <p className="text-2xl font-bold text-pai-navy">₹2,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Insurance card */}
          <FadeUp delay={0.15}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 flex flex-col gap-5 h-full">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-pai-navy/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-pai-navy" />
                </div>
                <h3 className="font-roboto-slab text-xl font-bold text-pai-navy">
                  Insurance
                </h3>
              </div>

              <ul className="flex flex-col gap-2">
                {insuranceFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="overflow-x-auto -mx-2">
                <table className="w-full text-xs border-collapse min-w-[260px]">
                  <thead>
                    <tr className="bg-pai-navy text-white">
                      <th className="px-3 py-2 text-left rounded-tl-lg font-medium">
                        Coverage
                      </th>
                      <th className="px-3 py-2 text-center font-medium">Solo</th>
                      <th className="px-3 py-2 text-center rounded-tr-lg font-medium">
                        Tandem
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {insuranceTiers.map((tier, i) => (
                      <tr
                        key={tier.coverage}
                        className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-3 py-2 font-medium text-gray-700">
                          {tier.coverage}
                        </td>
                        <td className="px-3 py-2 text-center text-gray-600">
                          {tier.soloPremium}
                        </td>
                        <td className="px-3 py-2 text-center text-gray-600">
                          {tier.tandemPremium}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-gray-400 mt-1.5 px-2">
                  Premiums include GST
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Pilot Rating card */}
          <FadeUp delay={0.25}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 flex flex-col gap-5 h-full">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-pai-navy/10 flex items-center justify-center flex-shrink-0">
                  <IdCard className="w-5 h-5 text-pai-navy" />
                </div>
                <h3 className="font-roboto-slab text-xl font-bold text-pai-navy">
                  Pilot Rating
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                PAI&apos;s Pilot Rating System helps pilots progress through
                structured levels of competency, ensuring safe and responsible
                flying. Ratings are issued through accredited schools and
                instructors based on skill, logged hours, and demonstrated safety
                practices. This system maintains uniform standards for pilots
                across India.
              </p>

              <div className="mt-auto grid grid-cols-1 gap-3">
                {["Student Pilot", "Novice", "Intermediate", "Advanced", "Master"].map(
                  (level, i) => (
                    <div
                      key={level}
                      className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-gray-100"
                    >
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{
                          background: `hsl(${200 + i * 10}, 50%, ${40 + i * 5}%)`,
                        }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {level}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
