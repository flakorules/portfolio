import React from "react";
import { skills } from "../../Data/skills";

export const Skills = () => {
  return (
    <section className="page-section portfolio" id="skills">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Skills
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
          {skills.map((skill) => (
            <div key={skill.skillId} className="col-2 m-5">
              <img  src={skill.skillIcon} alt="..." />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
