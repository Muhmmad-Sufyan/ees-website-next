"use client";

import "@/styles/services.css";
import PageHeader from "@/components/shared/PageHeader";
import ServicesContent from "@/components/services/ServicesContent";

export default function Services() {
  return (
    <>
      <PageHeader className="service-ripple" imageClass="service-image ripple-effect" title="Services" />
      <ServicesContent />
    </>
  );
}
