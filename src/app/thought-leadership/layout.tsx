import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thought Leadership",
  description:
    "Insights, research, and perspectives from Pragmatiq on EdTech, healthcare AI, AgriTech, and the future of enterprise technology in emerging markets.",
  openGraph: {
    title: "Thought Leadership — Pragmatiq",
    description:
      "Insights, research, and perspectives from Pragmatiq on EdTech, healthcare AI, AgriTech, and the future of enterprise technology in emerging markets.",
    url: "/thought-leadership",
  },
};

export default function ThoughtLeadershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
