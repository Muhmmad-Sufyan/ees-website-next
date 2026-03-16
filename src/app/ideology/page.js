"use client";

import "@/styles/ideology.css";
import PageHeader from "@/components/shared/PageHeader";
import IdeologyContent from "@/components/ideology/IdeologyContent";

export default function Ideology() {
  return (
    <>
      <PageHeader className="ideology-ripple" imageClass="ideology-image ripple-effect" title="Ideology" />
      <IdeologyContent />
    </>
  );
}
