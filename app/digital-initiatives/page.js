"use client";

import "@/styles/digital-initiatives.css";
import PageHeader from "@/components/shared/PageHeader";
import DigitalInitiativesContent from "@/components/digital-initiatives/DigitalInitiativesContent";

export default function DigitalInitiatives() {
  return (
    <>
      <PageHeader className="di-ripple" imageClass="di-image ripple-effect" title="Digital Initiatives" />
      <DigitalInitiativesContent />
    </>
  );
}
