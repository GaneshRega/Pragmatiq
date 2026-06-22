import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Pragmatiq's EdTech platforms — PurpleGene AI and Connect LMS — personalise learning for millions of students with adaptive mastery engines and AI-driven curriculum delivery.",
  openGraph: {
    title: "Education Solutions — Pragmatiq",
    description:
      "Pragmatiq's EdTech platforms — PurpleGene AI and Connect LMS — personalise learning for millions of students with adaptive mastery engines and AI-driven curriculum delivery.",
    url: "/industries/education",
  },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
