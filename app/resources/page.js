"use client";

import "@/styles/resources.css";
import PageHeader from "@/components/shared/PageHeader";
import ResourcesContent from "@/components/resources/ResourcesContent";

export default function Resources() {
  return (
    <>
      <PageHeader className="resources-ripple" imageClass="resources-image ripple-effect" title="Resources" />
      <ResourcesContent />
    </>
  );
}
