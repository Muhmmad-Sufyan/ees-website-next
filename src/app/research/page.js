"use client";

import { useEffect } from "react";
import AOS from "aos";
import "@/styles/research.css";
import PageHeader from "@/components/shared/PageHeader";
import ResearchContent from "@/components/research/ResearchContent";

export default function Research() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="main-div">
    <div className="bg-color">
      <PageHeader
        className="research-ripple"
        imageClass="research-image"
        title="Research & Publications"
      />
      </div>
      <ResearchContent />
    </div>
  );
}
