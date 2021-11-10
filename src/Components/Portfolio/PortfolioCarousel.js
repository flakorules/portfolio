import React from "react";
import { PortfolioCarouseltem } from "./PortfolioCarouseltem";

export const PortfolioCarousel = ({ project }) => {
  return (
    <div
      id={`carouselExampleControls${project.projectId}`}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {project.images.map((image, index) => (
          <PortfolioCarouseltem image={image} index={index} key={index} />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carouselExampleControls${project.projectId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carouselExampleControls${project.projectId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
