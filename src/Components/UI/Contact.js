import React from "react";
import { ContactForm } from "../Contact/ContactForm";
import { SectionHeader } from "./SectionHeader";

export const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        {/* <!-- Contact Section Heading--> */}
        <SectionHeader title="Contact Me" />
        {/* <!-- Contact Section Form--> */}
        <div className="row justify-content-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
