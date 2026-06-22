import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Sciences",
  description:
    "Pragmatiq partners with life sciences organisations to accelerate drug discovery, clinical operations, and regulatory compliance through AI-powered digital platforms.",
  openGraph: {
    title: "Life Sciences Solutions — Pragmatiq",
    description:
      "Pragmatiq partners with life sciences organisations to accelerate drug discovery, clinical operations, and regulatory compliance through AI-powered digital platforms.",
    url: "/industries/life-sciences",
  },
};

export default function LifeSciencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
