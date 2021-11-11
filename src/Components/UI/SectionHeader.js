import React from "react";

export const SectionHeader = ({ title }) => {
  return (
    <>
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
        {title}
      </h2>
      {/* <!-- Icon Divider--> */}
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-code fa-2x"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
    </>
  );
};
