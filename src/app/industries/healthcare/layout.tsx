import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare",
  description:
    "Pragmatiq's healthcare solutions — including ClinAlly AI clinical decision support — help hospitals and health systems improve patient outcomes through intelligent technology.",
  openGraph: {
    title: "Healthcare Solutions — Pragmatiq",
    description:
      "Pragmatiq's healthcare solutions — including ClinAlly AI clinical decision support — help hospitals and health systems improve patient outcomes through intelligent technology.",
    url: "/industries/healthcare",
  },
};

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
