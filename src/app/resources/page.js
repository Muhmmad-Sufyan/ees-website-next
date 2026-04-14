"use client";

import "@/styles/resources.css";
import PageHeader from "@/components/shared/PageHeader";
import ResourcesContent from "@/components/resources/ResourcesContent";

export default function Resources() {
  return (
    <>
      <div className="rsbg-color">
        <PageHeader
          className="resources-ripple page-title"
          imageClass="resources-image"
          title="Resources"
        />
      </div>
      <ResourcesContent />
    </>
  );
}
