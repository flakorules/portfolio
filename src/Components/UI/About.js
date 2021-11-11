import React from "react";
import { SectionHeader } from "./SectionHeader";

export const About = () => {
  return (
    <section className="page-section portfolio" id="about">
      <div className="container">
        {/* <!-- About Section Heading--> */}
        <SectionHeader title="About" />
        {/* <!-- About Section Content--> */}
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
              Llevo más de diez años como desarrollador de software construyendo
              y manteniendo aplicaciones web para sectores de auditoría,
              educación y banca. Durante gran parte de mi experiencia laboral he
              utilizado herramientas del stack Microsoft como ASP.NET, C#, SQL
              Server y SQL Server Integration Services (SSIS). La pandemia y el
              trabajo desde casa me ha beneficiado con tiempo libre, el cual he
              utilizado en adquirir nuevos skills a través de cursos online.
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              Dado ésto, me motivé a crear éste portafolio en el cual expongo
              algunos proyectos que he realizado utilizando las herramientas que
              he aprendido como: .NET Core, Node JS, y React JS. Te invito a
              verlos, cada uno tiene los links a su codigo fuente, y si quieres
              verlos funcionar o necesitas ayuda para levantarlos en tu ambiente
              local, no dudes en contactarme a través del formulario de contacto
              o mi Linked In.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
