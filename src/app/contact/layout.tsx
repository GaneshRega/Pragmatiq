import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pragmatiq to discuss your digital transformation goals, explore partnership opportunities, or request a product demo.",
  openGraph: {
    title: "Contact Pragmatiq",
    description:
      "Get in touch with Pragmatiq to discuss your digital transformation goals, explore partnership opportunities, or request a product demo.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
