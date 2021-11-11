import React from "react";
import { SectionHeader } from "./SectionHeader";

export const Resume = () => {
  return (
    <section className="page-section portfolio" id="resume">
      <div className="container">
        {/* <!-- About Section Heading--> */}
        {/* <!-- Portfolio Section Heading--> */}
        <SectionHeader title="Resume" />
        {/* <!-- About Section Content--> */}

        <div className="text-center mt-4">
          <a
            className="btn btn-primary btn-xl"
            href="https://drive.google.com/file/d/1LopUTamw9BdhI3ywbPtzLYdTQj2KmcL-/view"
            target="_blank" rel="noreferrer"
          >
            <i className="fas fa-download fa-lg pr-2"></i> Descarga mi CV aquí
          </a>
        </div>
      </div>
    </section>
  );
};
