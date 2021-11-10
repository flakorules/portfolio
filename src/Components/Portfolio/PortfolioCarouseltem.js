import React from "react";

export const PortfolioCarouseltem = ({ image, index }) => {
  return (
    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
      <img className="img-fluid rounded mb-5" src={image} alt="..." />
    </div>
  );
};
