import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Pragmatiq's suite of products — Connect LMS, PurpleGene AI, AI Campus, and more. Built for scale across EdTech, healthcare, and enterprise sectors.",
  openGraph: {
    title: "Pragmatiq Products",
    description:
      "Explore Pragmatiq's suite of products — Connect LMS, PurpleGene AI, AI Campus, and more. Built for scale across EdTech, healthcare, and enterprise sectors.",
    url: "/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
