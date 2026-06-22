import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agriculture",
  description:
    "Pragmatiq's AgriTech solutions combine geospatial AI, drone integration, soil intelligence, and blockchain-backed land title protection to modernise farming at scale.",
  openGraph: {
    title: "AgriTech Solutions — Pragmatiq",
    description:
      "Pragmatiq's AgriTech solutions combine geospatial AI, drone integration, soil intelligence, and blockchain-backed land title protection to modernise farming at scale.",
    url: "/industries/agriculture",
  },
};

export default function AgricultureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
