import React from "react";
import { projects } from "../../Data/portfolio";
import { PortfolioItem } from "../Portfolio/PortfolioItem";
import { SectionHeader } from "./SectionHeader";

export const Portfolio = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <SectionHeader title="Portfolio"/>
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
