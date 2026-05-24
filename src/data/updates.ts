export interface Update {
  id: string;
  date: string;
  title: string;
  description: string;
  href?: string;
}

export const updates: Update[] = [
  {
    id: "website-update-2025",
    date: "21-11-2025",
    title: "PAI Website Update",
    description:
      "We are investigating some reported incidents of allegedly data leaks through the old PAI website that was in existence since 2020. The server has been shut down and the members were notified by email. Rest assured PAI will do its due diligence and take necessary steps following the guidelines.",
  },
  {
    id: "sikkim-cup-2025",
    date: "11-11-2025",
    title: "Sikkim Paragliding Accuracy Cup",
    description:
      "Please note the total prize money has been increased to INR: 6,25,000/-. Register today at civlcomps.org",
    href: "https://civlcomps.org/event/sikkim-paragliding-accuracy-cup-serie-1",
  },
  {
    id: "secretariat-change-2025",
    date: "11-11-2025",
    title: "Change in the PAI Secretariat",
    description:
      "We would like to inform all members and well-wishers that Mr. Altaf Shaikh has stepped down from his position as Secretary General of the Paragliding Association of India due to personal reasons on 6th Nov, 2025. We have appointed Mr. Rudrajit Lukhurakhan as the new General Secretary.",
  },
  {
    id: "reserve-workshop-2025",
    date: "27-09-2025",
    title: "Reserve Packing Workshop",
    description:
      "Secure your reserve for emergency times, repacking is the only way to make sure it opens at the right time. Attend PAI's FREE workshop organised on 30th September, 2025.",
  },
  {
    id: "insurance-renewal-2025",
    date: "16-09-2025",
    title: "Insurance Renewal",
    description:
      "PAI insurance renewal is now open. Ensure your coverage is up to date for the flying season. Visit the portal to renew your policy.",
  },
];
