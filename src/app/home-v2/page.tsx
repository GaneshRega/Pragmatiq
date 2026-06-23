"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSharedSections from "@/components/HomeSharedSections";
import { WovenLightHero } from "@/components/ui/woven-light-hero";

export default function HomeV2Page() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      import("aos/dist/aos.css");
      AOS.init({ once: true, duration: 800 });
    };
    initAOS();
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        <WovenLightHero />
        <HomeSharedSections />
      </main>
      <Footer />
    </>
  );
}
