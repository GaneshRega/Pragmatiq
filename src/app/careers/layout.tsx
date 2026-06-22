import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Pragmatiq and work on products that matter — from adaptive learning platforms to healthcare AI. Explore open roles across engineering, design, and product.",
  openGraph: {
    title: "Careers at Pragmatiq",
    description:
      "Join Pragmatiq and work on products that matter — from adaptive learning platforms to healthcare AI. Explore open roles across engineering, design, and product.",
    url: "/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
