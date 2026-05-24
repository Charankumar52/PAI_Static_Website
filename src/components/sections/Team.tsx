import { UserCheck, Settings, Tag } from "lucide-react";
import {
  managingCommittee,
  mcMembers,
  technicalCommittee,
  honoraryAdvisors,
} from "@/data/team";
import FadeUp from "@/components/ui/FadeUp";

export default function Team() {
  return (
    <section id="team" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <h2 className="font-roboto-slab text-2xl sm:text-3xl md:text-4xl font-bold text-pai-navy mb-4">
            PAI Team 2025–27
          </h2>
          <div className="w-16 h-1 bg-pai-sky mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            PAI&apos;s dedicated team members — the Managing Committee,
            Technical Committee, and volunteers — are here to serve the PAI
            member community and support the sport.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Managing Committee */}
          <FadeUp delay={0.05}>
            <div className="bg-surface rounded-2xl p-6 lg:p-8 border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-pai-navy flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-roboto-slab text-lg font-bold text-pai-navy">
                  Managing Committee
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {managingCommittee.map((person) => (
                  <div key={person.role} className="flex flex-col">
                    <span className="text-xs font-semibold text-pai-sky uppercase tracking-wider">
                      {person.role}
                    </span>
                    <span className="text-sm font-medium text-gray-800 mt-0.5">
                      {person.name}
                    </span>
                  </div>
                ))}

                <div className="pt-3 border-t border-gray-200 mt-1">
                  <span className="text-xs font-semibold text-pai-sky uppercase tracking-wider">
                    MC Members
                  </span>
                  <ul className="mt-2 flex flex-col gap-1">
                    {mcMembers.map((name) => (
                      <li key={name} className="text-sm text-gray-700">
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Technical Committee */}
          <FadeUp delay={0.15}>
            <div className="bg-surface rounded-2xl p-6 lg:p-8 border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-pai-navy flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-roboto-slab text-lg font-bold text-pai-navy">
                  Technical Committee
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <span className="text-xs font-semibold text-pai-sky uppercase tracking-wider">
                    Chairman
                  </span>
                  <p className="text-sm font-medium text-gray-800 mt-0.5">
                    {technicalCommittee.chairman}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <span className="text-xs font-semibold text-pai-sky uppercase tracking-wider">
                    Committee Members
                  </span>
                  <ul className="mt-2 flex flex-col gap-1">
                    {technicalCommittee.members.map((name) => (
                      <li key={name} className="text-sm text-gray-700">
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Honorary Advisors */}
          <FadeUp delay={0.25}>
            <div className="bg-surface rounded-2xl p-6 lg:p-8 border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-pai-navy flex items-center justify-center flex-shrink-0">
                  <Tag className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-roboto-slab text-lg font-bold text-pai-navy">
                  Honorary Advisors
                </h3>
              </div>

              <ul className="flex flex-col gap-2">
                {honoraryAdvisors.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pai-sky flex-shrink-0" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
