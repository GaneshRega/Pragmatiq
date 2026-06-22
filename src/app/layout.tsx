import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://pragmatiq.in");

const defaultTitle = "Pragmatiq — Agile. Adaptive. Accountability.";
const defaultDescription =
  "Pragmatiq builds scalable digital solutions powered by pragmatic innovation — spanning EdTech, AgriTech, and enterprise technology with agility, adaptability, and accountability at their core.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Pragmatiq",
  },
  description: defaultDescription,
  keywords: [
    "Pragmatiq",
    "EdTech",
    "AgriTech",
    "enterprise technology",
    "digital solutions",
    "PurpleGene",
    "Connect LMS",
    "AI Campus",
    "healthcare AI",
    "scalable software",
  ],
  authors: [{ name: "Pragmatiq" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    siteName: "Pragmatiq",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/pragmatiq_logo.png",
        width: 1200,
        height: 630,
        alt: "Pragmatiq — Agile. Adaptive. Accountability.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/pragmatiq_logo.png"],
  },
  icons: {
    icon: "/pragicon.png",
    apple: "/pragicon.png",
  },
  manifest: "/site.webmanifest",
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
