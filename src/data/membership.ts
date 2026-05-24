export interface InsuranceTier {
  coverage: string;
  soloPremium: string;
  tandemPremium: string;
}

export const insuranceTiers: InsuranceTier[] = [
  { coverage: "5 Lacs", soloPremium: "₹2,631", tandemPremium: "₹3,750" },
  { coverage: "10 Lacs", soloPremium: "₹3,759", tandemPremium: "₹5,545" },
  { coverage: "20 Lacs", soloPremium: "₹6,767", tandemPremium: "—" },
  { coverage: "40 Lacs", soloPremium: "₹12,219", tandemPremium: "—" },
  { coverage: "50 Lacs", soloPremium: "₹15,039", tandemPremium: "—" },
];

export const insuranceFeatures = [
  "Covers paragliding emergency injuries",
  "Air ambulance coverage",
  "No deductibles — full claim from the first rupee",
  "Covers trips up to 365 days",
  "Pan India + Nepal & Bhutan coverage",
];
