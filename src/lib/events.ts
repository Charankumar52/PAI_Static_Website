export const SIKKIM_EVENT = {
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScF4GiRdW3cBHWh3PGXEoiGsHQ3LxTd63DzaC1tWHdphmjllQ/viewform?usp=header",
  image: "/images/events/sikkim-accuracy-cup.png",
  title: "Sikkim Paragliding Accuracy Cup — Serie 2",
  expiresAt: "2026-11-19T23:59:59+05:30",
};

export function isSikkimEventLive(): boolean {
  return Date.now() < new Date(SIKKIM_EVENT.expiresAt).getTime();
}
