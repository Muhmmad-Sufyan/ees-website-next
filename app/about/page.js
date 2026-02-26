"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "@/styles/home.css";
import "@/styles/about.css";
import quotes from "@/data/quotes.json";

import PageHeader from "@/components/shared/PageHeader";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhatDrivesUs from "@/components/home/WhatDrivesUs";
import AboutContent from "@/components/about/AboutContent";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "500px" }} />,
});

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const daily_quotes = quotes
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, 4);

  return (
    <>
      <PageHeader
        className="about-ripple"
        imageClass="about-image"
        title="About Us"
      />
      <WelcomeSection OwlCarousel={OwlCarousel} daily_quotes={daily_quotes} />
      <WhatDrivesUs OwlCarousel={OwlCarousel} />
      <AboutContent />
    </>
  );
}
