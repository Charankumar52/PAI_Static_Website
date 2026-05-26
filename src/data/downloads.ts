export interface Download {
  title: string;
  description?: string;
  file: string;
  folder?: boolean;
}

const drive = (id: string) =>
  `https://drive.google.com/uc?export=download&id=${id}`;

export const downloads: Download[] = [
  {
    title: "PAI Constitution",
    description: "Official constitution of the Paragliding Association of India.",
    file: drive("179iJ4jZC7Bqpp7zoGlYsXggBtvol6KNg"),
  },
  {
    title: "CARE Insurance Claim Form",
    description: "Insurance claim form for PAI members covered under the CARE insurance policy.",
    file: drive("1psXntdA2wk83ylE8FwJOgpOOqx-pS5ew"),
  },
  {
    title: "PAI Technical Manual 2020 — v2",
    description: "PAI Technical Manual Version 2 (2020) covering technical standards and guidelines.",
    file: drive("1SADgWWIX7TsQnlx7y30MpTyFYBmntrsH"),
  },
  {
    title: "PG National Rating System — NPRS v4",
    description: "National Paragliding Rating System (NPRS) Version 4 — guidelines and rating criteria.",
    file: drive("1uJIJCkTsbs0t59FnDSOnOcc4--V-w6SH"),
  },
  {
    title: "PPG National Rating System — Oct 2025",
    description: "Powered Paragliding (PPG) National Rating System guidelines, updated October 2025.",
    file: drive("1m85LbkNhCeDcAcekPtj01WmsGO_oLRzP"),
  },
  {
    title: "PAI Tandem Workshop Manual",
    description: "Comprehensive manual for PAI Tandem Workshop participants and instructors.",
    file: drive("1ILLTgWNHGRTiytaewhaV4n6m9f98niis"),
  },
  {
    title: "PAI PG Tandem Workshop Syllabus",
    description: "Syllabus and course outline for the PAI Paragliding Tandem Workshop.",
    file: drive("1GkS5LKi_AfZtK7TEUifsNP8iGBkcXiyC"),
  },
  {
    title: "Associate Membership Form v1.2",
    description: "PAI Associate Membership application form — version 1.2.",
    file: drive("1IQ9bV3FHmSdZgDBnAwKn9fQxt1TqrfWz"),
  },
  {
    title: "Requirements for PAI Affiliated School",
    description: "Standards and requirements for flying schools seeking PAI affiliation.",
    file: drive("1lyr9t1_Hrb13o-tVqqcuF2e2lnv2OjAI"),
  },
];
