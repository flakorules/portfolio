import React from "react";
import { skills } from "../../Data/skills";
import { SectionHeader } from "./SectionHeader";

export const Skills = () => {
  return (
    <section className="page-section portfolio" id="skills">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <SectionHeader title="Skills"/>
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row justify-content-center">
          {skills.map((skill) => (
            <div key={skill.skillId} className="col-lg-1 col-md-2 col-sm-3 col-2 m-5">
              <img  src={skill.skillIcon} alt="..." />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
