import React from "react";
import { PortfolioModal } from "./PortfolioModal";

export const PortfolioItem = ({ project }) => {
  return (
    <>
      {/* <!-- Portfolio Item 1--> */}
      <div className="col-md-6 col-lg-4 mb-5">
        <div
          className="portfolio-item mx-auto"
          data-bs-toggle="modal"
          data-bs-target={`#portfolioModal${project.projectId}`}
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-eye fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={project.mainImage} alt="..." />
        </div>
      </div>

      <PortfolioModal project={project}/>
    </>
  );
};
