import React from "react";
import avataaars from '../../Images/avataaars.svg';

export const Masterhead = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* <!-- Masthead Avatar Image--> */}
        <img
          className="masthead-avatar mb-5"
          src={avataaars}
          alt="..."
        />
        {/* <!-- Masthead Heading--> */}
        <h1 className="masthead-heading mb-0">
          Hola! Mi nombre es Cristian Cisternas
        </h1>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-code fa-2x"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Masthead Subheading--> */}
        <p className="masthead-subheading font-weight-light mb-0">
          Soy Desarrollador de Software y te invito a ver mi portafolio.
        </p>
      </div>
    </header>
  );
};
