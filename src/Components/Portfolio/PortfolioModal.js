import React from "react";
import { PortfolioCarousel } from "./PortfolioCarousel";
import { ProjectToolBadge } from "./ProjectToolBadge";

export const PortfolioModal = ({ project }) => {
  return (
    <div
      className="portfolio-modal modal fade"
      id={`portfolioModal${project.projectId}`}
      tabIndex="-1"
      aria-labelledby={`portfolioModal${project.projectId}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl lead">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <PortfolioCarousel project={project} />

                  {/* <!-- Portfolio Modal - Text--> */}
                  <p className="mb-4 lead">{project.description}</p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-8 mb-4">
                  <h3 className="portfolio-modal-title text-secondary mb-0">
                    Herramientas utilizadas
                  </h3>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fas fa-code"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>
                </div>
              </div>

              {project.backendTools.length > 0 && (
                <div className="row justify-content-center">
                  <div className="col-lg-8 mb-4">
                    <label className="font-italic"> Backend: </label>
                    {project.backendTools.map((tool, index) => (
                      <ProjectToolBadge key={index} tool={tool} />
                    ))}
                  </div>
                </div>
              )}

              {project.frontendTools.length > 0 && (
                <div className="row justify-content-center">
                  <div className="col-lg-8 mb-4">
                    Frontend:{" "}
                    {project.frontendTools.map((tool, index) => (
                      <ProjectToolBadge key={index} tool={tool} />
                    ))}
                  </div>
                </div>
              )}

              <div className="row justify-content-center">
                <div className="col-lg-8 mt-4">
                  <h2 className="portfolio-modal-title text-secondary mb-0">
                    Código Fuente
                  </h2>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fas fa-code"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>

                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    {!!project.backendSource && (
                      <a
                        type="button"
                        className="btn btn-primary"
                        href={project.backendSource}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Backend
                      </a>
                    )}
                    {!!project.frontendSource && (
                      <a
                        type="button"
                        className="btn btn-primary"
                        href={project.frontendSource}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Frontend
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {!!project.url && (
                <div className="row justify-content-center">
                  <div className="col-lg-8 mt-4">
                    <h2 className="portfolio-modal-title text-secondary mb-0">
                      Link a la aplicación
                    </h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>

                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      {!!project.backendSource && (
                        <a
                          type="button"
                          className="btn btn-primary"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Click aquí
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
