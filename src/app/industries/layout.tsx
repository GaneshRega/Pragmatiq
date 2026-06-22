import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Pragmatiq serves the HEAL sectors — Healthcare, Education, Agriculture, and Life Sciences — with purpose-built digital solutions and AI-powered platforms.",
  openGraph: {
    title: "Industries — Pragmatiq",
    description:
      "Pragmatiq serves the HEAL sectors — Healthcare, Education, Agriculture, and Life Sciences — with purpose-built digital solutions and AI-powered platforms.",
    url: "/industries",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
