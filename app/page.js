"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "@/styles/home.css";
import "@/styles/portfolio.css";
import quotes from "@/data/quotes.json";

// import HeroCarousel from "@/components/home/HeroCarousel";
import PortfolioSection from "@/components/home/PortfolioSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhatDrivesUs from "@/components/home/WhatDrivesUs";
import DiagnosisPreview from "@/components/home/DiagnosisPreview";
import IdeologyCards from "@/components/home/IdeologyCards";
import TextbooksSection from "@/components/home/TextbooksSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import NewCollection from "@/components/home/NewCollection";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "500px" }} />,
});

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const daily_quotes = quotes
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, 4);

  // const handleNewCollectionClick = () => {
  //   document.getElementById("new-collection").scrollIntoView();
  // };

  return (
    <>
      {/* <HeroCarousel OwlCarousel={OwlCarousel} handleNewCollectionClick={handleNewCollectionClick} /> */}
      <PortfolioSection />
      <WelcomeSection OwlCarousel={OwlCarousel} daily_quotes={daily_quotes} />
      <WhatDrivesUs OwlCarousel={OwlCarousel} />
      <section className="books-w"></section>
      <DiagnosisPreview />
      <IdeologyCards />
      <TextbooksSection />
      <ServicesPreview />
      <NewCollection OwlCarousel={OwlCarousel} />
    </>
  );
}

export default Home;
