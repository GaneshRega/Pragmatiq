import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Pragmatiq delivers end-to-end technology services — from product engineering and AI development to Micro-GCC staffing and digital transformation consulting.",
  openGraph: {
    title: "Pragmatiq Services",
    description:
      "Pragmatiq delivers end-to-end technology services — from product engineering and AI development to Micro-GCC staffing and digital transformation consulting.",
    url: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
