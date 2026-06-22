import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Pragmatiq — our mission, values, and the team driving pragmatic innovation across EdTech, AgriTech, healthcare, and enterprise technology.",
  openGraph: {
    title: "About Pragmatiq",
    description:
      "Learn about Pragmatiq — our mission, values, and the team driving pragmatic innovation across EdTech, AgriTech, healthcare, and enterprise technology.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
