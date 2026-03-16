"use client";

import "@/styles/diagnosis.css";
import PageHeader from "@/components/shared/PageHeader";
import DiagnosisContent from "@/components/diagnosis/DiagnosisContent";

export default function Diagnosis() {
  return (
    <>
      <PageHeader className="diagnosis-ripple" imageClass="diagnosis-image" title="Diagnosis" />
      <DiagnosisContent />
    </>
  );
}
