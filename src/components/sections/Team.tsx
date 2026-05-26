import { UserCheck, Settings, Tag } from "lucide-react";
import {
  managingCommittee,
  mcMembers,
  technicalCommittee,
  honoraryAdvisors,
} from "@/data/team";
import FadeUp from "@/components/ui/FadeUp";
import MemberCard from "@/components/ui/MemberCard";

function SectionDivider({
  icon,
  title,
  count,
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
}) {
  return (
    <div className="flex items-center gap-4 mt-14 mb-7">
      <div className="w-10 h-10 rounded-xl bg-pai-navy flex items-center justify-center flex-shrink-0 shadow-md">
        {icon}
      </div>
      <div>
        <h3 className="font-roboto-slab text-lg sm:text-xl font-bold text-pai-navy leading-none">
          {title}
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">{count} members</p>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
    </div>
  );
}

function SubDivider({ title, count }: { title: string; count: number }) {
  return (
    <div className="flex items-center gap-3 mt-10 mb-5">
      <div className="w-1 h-5 bg-pai-sky rounded-full" />
      <h4 className="font-roboto-slab text-sm font-semibold text-pai-navy">
        {title}
      </h4>
      <span className="text-xs text-gray-400">({count})</span>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <FadeUp className="text-center mb-4">
          <h2 className="font-roboto-slab text-2xl sm:text-3xl md:text-4xl font-bold text-pai-navy mb-4">
            PAI Team 2025–27
          </h2>
          <div className="w-16 h-1 bg-pai-sky mx-auto mb-6 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Meet the dedicated people behind PAI — hover or tap any card to learn more.
          </p>
        </FadeUp>

        {/* ── Managing Committee ── */}
        <FadeUp>
          <SectionDivider
            icon={<UserCheck className="w-5 h-5 text-white" />}
            title="Managing Committee"
            count={managingCommittee.length}
          />
        </FadeUp>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3">
          {managingCommittee.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.04}>
              <MemberCard member={member} />
            </FadeUp>
          ))}
        </div>

        {/* MC Members */}
        <FadeUp>
          <SubDivider title="MC Members" count={mcMembers.length} />
        </FadeUp>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3">
          {mcMembers.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.04}>
              <MemberCard member={member} />
            </FadeUp>
          ))}
        </div>

        {/* ── Technical Committee ── */}
        <FadeUp>
          <SectionDivider
            icon={<Settings className="w-5 h-5 text-white" />}
            title="Technical Committee"
            count={technicalCommittee.length}
          />
        </FadeUp>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3">
          {technicalCommittee.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.04}>
              <MemberCard member={member} />
            </FadeUp>
          ))}
        </div>

        {/* ── Honorary Advisors ── */}
        <FadeUp>
          <SectionDivider
            icon={<Tag className="w-5 h-5 text-white" />}
            title="Honorary Advisors"
            count={honoraryAdvisors.length}
          />
        </FadeUp>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3">
          {honoraryAdvisors.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.04}>
              <MemberCard member={member} />
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
