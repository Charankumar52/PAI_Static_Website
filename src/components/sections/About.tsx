import { Shield, BookOpen, Users, Globe2, CheckCircle2, Award } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const pillars = [
  {
    icon: Shield,
    title: "Safety First",
    desc: "Ensuring paragliding is learnt and practised safely — protecting pilots, passengers, and the public.",
  },
  {
    icon: BookOpen,
    title: "Training & Ratings",
    desc: "A nationally recognised pilot rating system (PG & PPG) with equivalence to major international frameworks including FAI SafePro.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Uniting individual pilots, schools, state associations, and clubs under one national platform.",
  },
  {
    icon: Globe2,
    title: "FAI Recognition",
    desc: "PAI and its affiliated state associations have been involved in organising internationally recognised paragliding competitions in India under the FAI/CIVL framework, including both Cross Country (XC) and Accuracy disciplines. These events have included FAI Category 2 sanctioned competitions and events functioning as World Cup level qualifiers with WPRS ranking validity.",
  },
];

const highlights = [
  "Provides a national platform to promote, develop, control and regulate the sport.",
  "Supports members with information on Training, Insurance, Pilot Ratings, Safety, Site Certification, setting up of local Associations and Clubs, and provides information material related to the activity.",
  "Published the PAI Technical Manual covering all aspects of management of a sports organisation — based on standards followed all over the world and approved by both BHPA and USPPA.",
  "Developed the National Rating System (NPRS) for Pilot skill evaluation for both Paragliding (PG) and Powered Paragliding (PPG) — skill levels share equivalence to major systems around the world and follow the FAI SafePro Para system.",
  "Provides group personal accident insurance in association with CARE Group Insurance.",
  "Supports site certification, club formation, and regional association development.",
  "The PAI Constitution is available on its website.",
  "For the last 16 years, PAI has been instrumental in organising events related to Paragliding every year — including Workshops, special training sessions, and competitions at National level.",
];

const timeline: { year: string; events: string[] }[] = [
  {
    year: "2026",
    events: [
      "Power Paragliding Workshop (Feb) — in association with Eric Menzes and Mangesh Dighe.",
      "Paragliding World Cup – Panchgani (Feb) — in association with Krishna Kant Bhagra.",
    ],
  },
  {
    year: "2025",
    events: [
      "Built a comprehensive website for PAI to manage verifiable Membership management, Rating system and Insurance management — free of cost in association with Puneet Behl (Dec).",
      "Sikkim Spot Landing Competition CAT-2 (Nov) — in association with Himalayan Footprints.",
      "Reserve Re-Packing Workshop, Bir-Billing (Oct) — in association with Paragliding Bawas.",
      "Fast Track Rating Programme (Jul).",
      "Paragliding CAT-2 XC Competition – Panchgani (Feb).",
    ],
  },
  {
    year: "2024",
    events: [
      "Advanced XC Clinic, Bir-Billing (Mar) — in association with Debu Chowdhury and Sunith Rao.",
      "Paragliding Pre-World Cup CAT-2 XC Competition – Panchgani (Feb).",
      "Developed Tandem Paragliding Manual (Nov) — in association with Gurpreet Dhindsa.",
    ],
  },
  {
    year: "2023",
    events: [
      "Reserve re-packing workshop, Kamshet, Maharashtra (Sep) — in association with Rohit Kawalay and Khushru Peethawala.",
      "Mentoring Workshop, Kamshet, Maharashtra (Aug) — in association with Sunith Rao, Abhijeet Avate and Altaf Sheikh.",
      "XC Flying in Panchgani and Bir, and Understanding Weather in Bengaluru (Jun) — in association with Krishan Kant Baghra and Narendra Raman.",
      "Wilderness First Aid Course, Bir-Billing, Himachal Pradesh (Jun) — in association with Hanifel Center.",
    ],
  },
  {
    year: "2021",
    events: [
      "1st Himalayan Monal National Aerofest — in association with the Billing Paragliding Association. 26, 27, 28 November at Khajjiar, the mini-Switzerland of India.",
      "Online Basic Life Saver Course — PAI organised a 4-day (2 hrs a day) online course conducted by Dhiren Talpade of Jumpstart. A basic First Aid course to equip pilots with the rudimentary knowledge and skill to deal with the immediate requirement in cases of accidents before the injured can get proper medical attention.",
      "Kehloor Paragliding Accuracy Cup 2021 — 17–23 March at Bilaspur, H.P.",
    ],
  },
  {
    year: "2020",
    events: [
      "Reserve throwing simulation and repack workshop was planned in Bangalore but due to COVID-19 the event was postponed.",
      "Tandem Pilot Evaluation Workshop — conducted on invitation by Kerala Tourism. The evaluation was done as per BHPA standards by a BHPA certified Tandem Instructor.",
    ],
  },
  {
    year: "2019",
    events: [
      "Tow Paragliding over water at Thirumoorthy Dam, Tamil Nadu — organised by PAI with the help of members from TN who organised the logistics. 15 pilots from different parts of the country attended. Three pilots got certified in Towing by Mr. Egidijus Satas from Parawinch Lithuania, one of the top winch manufacturers in the world.",
      "Panchgani Open 2019 — a cross country competition organised in Satara district in collaboration with Indian Paragliding Competitions, a firm that organises Paragliding Competitions in India. Unfortunately the event had to be cancelled due to a tragic accident.",
    ],
  },
  {
    year: "2018",
    events: [
      "5th PAI Pre PG Accuracy World Cup, Kamshet (May) — a successful event organised with PGAWC, an International Association. The event's Director was from Lithuania and the Chief Judge was invited from Slovakia as per international norm.",
    ],
  },
  {
    year: "2017",
    events: [
      "4th PAI Paragliding India Accuracy Comp 2017 — held on 11–12 February 2017 at Kamshet.",
    ],
  },
  {
    year: "2016",
    events: [
      "New Group Personal Accident Policy for PAI members provided by Bajaj Allianz (Dec).",
      "Certified First Aid Professional Course Workshop organised by PAI at Kamshet (Apr).",
      "Instructor & Tandem Pilot Competence Workshop (Mar) — PAI in alliance with BHPA introduced PARAGLIDING INSTRUCTOR and DUAL (Tandem) COMPETENCE CERTIFICATION WORKSHOP in India. Conducted by the Technical Team from BHPA.",
      "Paragliding India XC League 2016, Panchgani, Maharashtra — 09–13 February 2016. Banking on the experience of previous two editions, PAI made this event bigger and better with participation open to pilots from all over the country and other parts of the world.",
    ],
  },
  {
    year: "2015",
    events: [
      "7th International Paragliding Festival, Vagamon, Kerala — February 21st to March 1st 2015 — in association with Kerala Adventure Tourism Promotion Society (KATPS), Vagamon Destination Management Committee & Paragliding Association Of India (PAI).",
    ],
  },
  {
    year: "2014",
    events: [
      "PAI Paraglider Porosity Check Clinic (Dec) — porosity tests conducted by Vijay Soni.",
      "Kamshet Paragliding Festival (May) — fun festival, free flying, spot landing competition, mountaineering activities and a music concert.",
      "6th International Paragliding Festival — hosted by Fly Vagamon in association with KSYWB (Kerala State Youth Welfare Board), Kerala Tourism and Paragliding Association of India at Vagamon, Kerala — 22nd February to 02nd March 2014.",
      "First TANDEM Paragliding Clinic under PAI PPPI, Kamshet (Feb) — conducted by Antoine Laurens (France) and Debu Choudhury.",
    ],
  },
  {
    year: "2012",
    events: [
      "Sikkim Paragliding Festival – PAI PG Fest (Nov) — conducted in association with the Ministry of Tourism (Govt of Sikkim) and SLA Sikkim Paragliding Adventure Sports Co-Operative Society Ltd.",
      "PAI Autumn Camp, Bir-Billing (Oct) — Thermalling and XC Clinic with Debu Choudhury. The 6-day workshop concentrated on advanced level flying including Thermalling, weather reading, terrain assessment, XC and more. The Indian Air Force too sent their personnel to be trained under Debu in this workshop.",
      "Fun-Flying Beach Festival, Anjuna Beach, Goa (Apr) — held from 27–29 April 2012. Organised by Paragliding Association of India (PAI) and Goa Airsports Association.",
      "Summer Camp – Progression Clinic (Apr) — in continuation of PAI's commitment to offer skill-improvement opportunities. Included advanced flying: Thermalling and Cross Country. Conducted by ace Indian Pilot Debu Choudhury.",
    ],
  },
  {
    year: "2011",
    events: [
      "Paragliding Technical Workshop (Nov) — conducted by 'SIV Guru' Jocky Sanderson over a 3-day workshop. Covered Safety and Thermalling course, video sessions and more.",
      "Newly formed Tamil Nadu State Association 'Fly TN' associated with PAI (Sep) — Fly TN organised a flying get-together at Yelagiri. All paragliding pilots and enthusiasts from India were invited to join.",
      "First PAI Paragliding Festival (May) — Location: Shelar Hills, Kamshet, Maharashtra, India.",
    ],
  },
  {
    year: "2010",
    events: [
      "PAI First General Body Meeting, Mumbai (17 Jul) — various committees and office bearers were elected. A milestone in the history of the Indian Paragliding community — all existing paragliding schools came together and formed the Paragliding Association of India.",
      "Paragliding Association of India registered under the Societies Registration Act, 1860 in Goa (26 May 2010).",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">

        {/* Header */}
        <FadeUp className="text-center">
          <h2 className="font-roboto-slab text-2xl sm:text-3xl md:text-4xl font-bold text-pai-navy mb-4">
            About PAI
          </h2>
          <div className="w-16 h-1 bg-pai-sky mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            The <strong className="text-gray-800">Paragliding Association of India (PAI)</strong> is
            registered under the Societies Registration Act, 1860 in Goa on{" "}
            <strong className="text-gray-800">26th May 2010</strong>. PAI is an association{" "}
            <span className="text-pai-navy font-semibold">of pilots, for pilots and by pilots</span>.
            The main objective of the association is to provide a national platform for the Paragliding
            community in India and to promote, develop, control and regulate the sport. We are here to
            ensure that Paragliding is learnt and practised in a safe manner without causing injury to
            oneself or others.
          </p>
        </FadeUp>

        {/* Pillars */}
        <FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-3 p-5 rounded-2xl bg-surface border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-pai-navy/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-pai-navy" />
                </div>
                <h3 className="font-roboto-slab font-bold text-pai-navy text-sm sm:text-base">{title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Highlights + Governance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeUp delay={0.05}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pai-navy/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-pai-navy" />
                </div>
                <h3 className="font-roboto-slab text-lg font-bold text-pai-navy">What PAI Does</h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-5">
              {/* Technical Committee */}
              <div className="rounded-2xl bg-surface border border-gray-100 p-6 flex flex-col gap-3">
                <h3 className="font-roboto-slab font-bold text-pai-navy text-base">Technical Committee</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our Technical Committee and Technical Advisory Panel consists of experienced and
                  accomplished Indian paraglider pilots who have achieved accolades in International meets.
                  All Technical Committee members are running successful Paragliding training centres —
                  some for over a decade and some for two decades.
                </p>
              </div>
              {/* Governance */}
              <div className="rounded-2xl bg-pai-navy text-white p-6 flex flex-col gap-3">
                <h3 className="font-roboto-slab font-bold text-lg">Governance &amp; Transparency</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  The Governing Body is democratically elected every two years by the General Body at
                  PAI&apos;s AGM. PAI maintains all its records supported by proper paperwork including
                  Audited Financial Reports, Annual Reports, and AGM Minutes for every year. Members are
                  updated through periodic email newsletters.
                </p>
              </div>
              {/* Membership types */}
              <div className="rounded-2xl bg-surface border border-gray-100 p-6 flex flex-col gap-3">
                <h3 className="font-roboto-slab font-bold text-pai-navy text-base">Membership Structure</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  PAI has both <strong>individual members</strong> and{" "}
                  <strong>regional associations as associate members</strong> — including the State
                  Associations of Tamil Nadu, Kerala, Goa, Arunachal Pradesh, Sikkim, and several other
                  regional associations involved in the promotion of Paragliding in their respective
                  geographies. Several Paragliding schools are affiliated to PAI.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Events Timeline */}
        <FadeUp>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-pai-navy/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-pai-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="font-roboto-slab text-lg font-bold text-pai-navy">
                16 Years of Events &amp; Workshops
              </h3>
            </div>

            <div className="overflow-y-auto max-h-[480px] pr-2 flex flex-col gap-0">
              {timeline.map(({ year, events: evts }, yi) => (
                <div key={year} className="flex gap-4">
                  {/* Year stem */}
                  <div className="flex flex-col items-center">
                    <span className="font-roboto-slab text-sm font-bold text-pai-navy bg-pai-navy/10 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                      {year}
                    </span>
                    {yi < timeline.length - 1 && (
                      <div className="w-0.5 bg-gray-200 flex-1 my-1" />
                    )}
                  </div>
                  {/* Events */}
                  <div className="flex flex-col gap-1.5 pb-5 flex-1 min-w-0">
                    {evts.map((e) => (
                      <div key={e} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-pai-sky mt-1.5 flex-shrink-0" />
                        {e}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
