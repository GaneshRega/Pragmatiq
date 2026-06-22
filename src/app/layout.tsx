import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pragmatiq — Agile. Adaptive. Accountability.",
  description:
    "Pragmatiq builds scalable digital solutions powered by pragmatic innovation — spanning EdTech, AgriTech, and enterprise technology with agility, adaptability, and accountability at their core.",
  openGraph: {
    title: "Pragmatiq — Agile. Adaptive. Accountability.",
    description:
      "Pragmatiq builds scalable digital solutions powered by pragmatic innovation — spanning EdTech, AgriTech, and enterprise technology with agility, adaptability, and accountability at their core.",
    siteName: "Pragmatiq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragmatiq — Agile. Adaptive. Accountability.",
    description:
      "Pragmatiq builds scalable digital solutions powered by pragmatic innovation — spanning EdTech, AgriTech, and enterprise technology with agility, adaptability, and accountability at their core.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="/_astro/Base.DvB2Xm2x.css" />
        <link rel="stylesheet" href="/_astro/contentParser.AKRAOgkk.css" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
