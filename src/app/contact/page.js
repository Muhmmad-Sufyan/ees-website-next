"use client";

import "@/styles/contact.css";
import PageHeader from "@/components/shared/PageHeader";
import ContactInfo from "@/components/contact/ContactInfo";

export default function Contact() {
  return (
    <>
      <PageHeader className="contact-ripple" imageClass="contact-image ripple-effect" title="Contact" />
      <ContactInfo />
    </>
  );
}
