"use client";

import { useState } from "react";
import { Users, Shield, IdCard, CheckCircle } from "lucide-react";
import { insuranceTiers, insuranceFeatures } from "@/data/membership";
import FadeUp from "@/components/ui/FadeUp";
import InsuranceBookingModal from "@/components/ui/InsuranceBookingModal";

export default function Membership() {
  const [insuranceModalOpen, setInsuranceModalOpen] = useState(false);
  return (
    <>
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

              <a
                href="https://portal.paraglidingassociationofindia.org/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full text-center text-sm font-semibold text-white bg-pai-navy hover:bg-pai-navy-dark rounded-lg py-2.5 transition-colors"
              >
                Sign Up / Renew
              </a>
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

              <div className="rounded-lg bg-amber-50 border border-amber-100 px-2.5 py-2 text-xs text-gray-600 leading-snug space-y-1.5">
                <p>
                  <span className="font-semibold text-amber-700">Note: </span>
                  Once you receive the insurance copy, please email it to{" "}
                  <a href="mailto:support@pgaoi.org" className="text-pai-sky underline underline-offset-2 hover:text-pai-navy transition-colors">
                    support@pgaoi.org
                  </a>{" "}
                  so it can be updated on the verifiable website.
                </p>
                <p>
                  <span className="font-semibold text-amber-700">Disclaimer: </span>
                  PAI is associated with CARE Group Insurance to provide members with the best possible pricing and benefits. CARE independently manages all policy bookings and claim processes. PAI does not earn or make any money from this arrangement.
                </p>
              </div>

              <button
                onClick={() => setInsuranceModalOpen(true)}
                className="mt-auto w-full text-center text-sm font-semibold text-white bg-pai-navy hover:bg-pai-navy-dark rounded-lg py-2.5 transition-colors"
              >
                Book Now
              </button>
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
                PAI&apos;s nationally recognised rating system covers both
                Paragliding (PG) and Powered Paragliding (PPG) disciplines,
                from introductory levels through to examiner qualifications.
              </p>

              {/* PG Ratings */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-pai-navy bg-pai-navy/10 rounded-full px-2.5 py-0.5">
                    Paragliding — PG
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { code: "P1",  name: "Introduction" },
                    { code: "P2",  name: "Student Pilot" },
                    { code: "P3",  name: "Novice Pilot" },
                    { code: "P4",  name: "Intermediate Pilot" },
                    { code: "P5",  name: "Advanced Pilot" },
                    { code: "P7",  name: "Tandem Pilot" },
                    { code: "P8",  name: "Asst. Instructor" },
                    { code: "P9",  name: "Instructor" },
                    { code: "P10", name: "Examiner" },
                  ].map(({ code, name }) => (
                    <div
                      key={code}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-surface border border-gray-100"
                    >
                      <span className="text-[10px] font-extrabold text-white bg-pai-navy rounded px-1.5 py-0.5 flex-shrink-0 leading-none">
                        {code}
                      </span>
                      <span className="text-xs text-gray-700 truncate">{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PPG Ratings */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-700 bg-teal-50 rounded-full px-2.5 py-0.5">
                    Powered Paragliding — PPG
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { code: "PPG1", name: "Novice" },
                    { code: "PPG2", name: "Intermediate" },
                    { code: "PPG3", name: "Advanced" },
                    { code: "PPG4", name: "Sports Tandem" },
                    { code: "PPG5", name: "Tandem" },
                    { code: "PPG6", name: "Instructor" },
                    { code: "PPG7", name: "Examiner" },
                  ].map(({ code, name }) => (
                    <div
                      key={code}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-teal-50/50 border border-teal-100"
                    >
                      <span className="text-[10px] font-extrabold text-white bg-teal-600 rounded px-1.5 py-0.5 flex-shrink-0 leading-none">
                        {code}
                      </span>
                      <span className="text-xs text-gray-700 truncate">{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://portal.paraglidingassociationofindia.org/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full text-center text-sm font-semibold text-white bg-pai-navy hover:bg-pai-navy-dark rounded-lg py-2.5 transition-colors"
              >
                Apply for Rating
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>

    <InsuranceBookingModal
      isOpen={insuranceModalOpen}
      onClose={() => setInsuranceModalOpen(false)}
    />
    </>
  );
}
