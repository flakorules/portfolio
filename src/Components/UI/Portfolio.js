import React from "react";
import { projects } from "../../Data/portfolio";
import { PortfolioItem } from "../Portfolio/PortfolioItem";

export const Portfolio = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-code fa-2x"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row justify-content-center">
          {/* <!-- Portfolio Item 1--> */}
          {projects.map((project) => (
            <PortfolioItem project={project} key={project.projectId} />
          ))}
        </div>
      </div>
    </section>
  );
};
