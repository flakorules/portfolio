import mainImage1 from "../Images/portfolio/proyect-secret-friend-main.png";
import mainImage2 from "../Images/portfolio/proyect-to-do-app-main.png";
import mainImage3 from "../Images/portfolio/proyect-soccer-field-booking-main.png";
import mainImage4 from "../Images/portfolio/proyect-raffles-app-main.png";
import mainImage5 from "../Images/portfolio/proyect-portfolio-main.png";
import mainImage6 from "../Images/portfolio/proyect-calendar-app-main.png";
import mainImage7 from "../Images/portfolio/proyect-mantenedor-personas-main.png";

import prj1_1 from "../Images/portfolio/carousel/project-secret-friend-1.png";
import prj1_2 from "../Images/portfolio/carousel/project-secret-friend-2.png";

import prj2_1 from "../Images/portfolio/carousel/project-to-do-app-1.png";
import prj2_2 from "../Images/portfolio/carousel/project-to-do-app-2.png";
import prj2_3 from "../Images/portfolio/carousel/project-to-do-app-3.png";

import prj3_1 from "../Images/portfolio/carousel/project-soccer-field-booking-1.png";
import prj3_2 from "../Images/portfolio/carousel/project-soccer-field-booking-2.png";
import prj3_3 from "../Images/portfolio/carousel/project-soccer-field-booking-3.png";
import prj3_4 from "../Images/portfolio/carousel/project-soccer-field-booking-4.png";
import prj3_5 from "../Images/portfolio/carousel/project-soccer-field-booking-5.png";

import prj4_1 from "../Images/portfolio/carousel/project-raffles-app-1.png";
import prj4_2 from "../Images/portfolio/carousel/project-raffles-app-2.png";
import prj4_3 from "../Images/portfolio/carousel/project-raffles-app-3.png";
import prj4_4 from "../Images/portfolio/carousel/project-raffles-app-4.png";
import prj4_5 from "../Images/portfolio/carousel/project-raffles-app-5.png";

import prj5_1 from "../Images/portfolio/carousel/project-portfolio-1.png";
import prj5_2 from "../Images/portfolio/carousel/project-portfolio-2.png";
import prj5_3 from "../Images/portfolio/carousel/project-portfolio-3.png";
import prj5_4 from "../Images/portfolio/carousel/project-portfolio-4.png";
import prj5_5 from "../Images/portfolio/carousel/project-portfolio-5.png";

import prj6_1 from "../Images/portfolio/carousel/project-calendar-app-1.png";
import prj6_2 from "../Images/portfolio/carousel/project-calendar-app-2.png";
import prj6_3 from "../Images/portfolio/carousel/project-calendar-app-3.png";
import prj6_4 from "../Images/portfolio/carousel/project-calendar-app-4.png";
import prj6_5 from "../Images/portfolio/carousel/project-calendar-app-5.png";
import prj6_6 from "../Images/portfolio/carousel/project-calendar-app-6.png";

import prj7_1 from "../Images/portfolio/carousel/project-mantenedor-personas-1.png";
import prj7_2 from "../Images/portfolio/carousel/project-mantenedor-personas-2.png";
import prj7_3 from "../Images/portfolio/carousel/project-mantenedor-personas-3.png";
import prj7_4 from "../Images/portfolio/carousel/project-mantenedor-personas-4.png";
import prj7_5 from "../Images/portfolio/carousel/project-mantenedor-personas-5.png";
import prj7_6 from "../Images/portfolio/carousel/project-mantenedor-personas-6.png";
import prj7_7 from "../Images/portfolio/carousel/project-mantenedor-personas-7.png";



export const projects = [
  {
    projectId: 1,
    projectName: "Amigo Secreto App",
    mainImage: mainImage1,
    description:
      "Idea que nace a partir del clásico juego del Amigo Secreto que en fiestas de fin de año es común dentro de grupos de amigos, compañeros de trabajo, de clase, etc.",
    images: [mainImage1, prj1_1, prj1_2],
    backendTools: ["Node JS", "Express JS"],
    frontendTools: ["React JS", "React Redux", "Bootstrap"],
    backendSource: "https://github.com/flakorules/secret-friend-backend",
    frontendSource: "https://github.com/flakorules/secret-friend-frontend",
    url: "https://cfcs-secret-friend.herokuapp.com/",
  },
  {
    projectName: "To do App",
    projectId: 2,
    mainImage: mainImage2,
    description:
      "Esta es mi solución al ejercicio clásico de crear una aplicación de Todos. Si deseas ver funcionar la aplicación, solicitame el acceso a través del formulario de contacto o mi LinkedIn.",
    images: [mainImage2, prj2_1, prj2_2, prj2_3],
    backendTools: [".NET Core", "JWT", "Entity Framework", "PostgreSQL"],
    frontendTools: ["React JS", "React Redux", "Bootstrap"],
    backendSource: "https://github.com/flakorules/todos-api",
    frontendSource: "https://github.com/flakorules/todos-frontend",
    url: "https://cfcs-todos-app.netlify.app/",
  },
  {
    projectName: "Soccer Field Booking",
    projectId: 3,
    mainImage: mainImage3,
    description:
      "Aplicación para reservar canchas de fútbol, la cual muestra al usuario los horarios en los que ha reservado y los horarios disponibles para reservar.",
    images: [mainImage3, prj3_1, prj3_2, prj3_3, prj3_4, prj3_5],
    backendTools: [".NET Core", "JWT", "Entity Framework", "SQL Server"],
    frontendTools: ["React JS", "React Redux"],
    backendSource: "https://github.com/flakorules/soccer-field-booking-backend",
    frontendSource:
      "https://github.com/flakorules/soccer-field-booking-frontend",
    url: null,
  },
  {
    projectName: "Raffles App",
    projectId: 4,
    mainImage: mainImage4,
    description:
      "Me ha tocado organizar Rifas a Beneficencia, asi como tambien he participado comprando tickets para otras. Conociendo la mecánica organización de estas es que nace la idea de construir esta App que simula que el proceso desde su inicio hasta el sorteo.",
    images: [mainImage4, prj4_1, prj4_2, prj4_3, prj4_4, prj4_5],
    backendTools: ["Node JS", "JWT", "Express JS", "Mongo DB"],
    frontendTools: ["React JS", "React Redux", "Bootstrap"],
    backendSource: "https://github.com/flakorules/app-raffles-backend",
    frontendSource: "https://github.com/flakorules/app-raffles-frontend",
    url: null,
  },
  {
    projectName: "Portafolio",
    projectId: 5,
    mainImage: mainImage5,
    description: "Mi proyecto de portafolio, el cual estás viendo en este preciso instante.",
    images: [mainImage5, prj5_1, prj5_2, prj5_3, prj5_4, prj5_5],
    backendTools: [],
    frontendTools: ["React JS", "Bootstrap"],
    backendSource: null,
    frontendSource: "https://github.com/flakorules/portfolio",
    url: null,
  },

  {
    projectName: "Calendar MERN",
    projectId: 6,
    mainImage: mainImage6,
    description:
      "Proyecto que es parte de los ejercicios del curso React: De cero a experto ( Hooks y MERN ) del profesor Fernando Herrera. Comunicate conmigo a través del formulario de contacto o en mi LinkedIn si deseas obtener acceso a la aplicación y ver su funcionamiento.",
    images: [mainImage6, prj6_1, prj6_2, prj6_3, prj6_4, prj6_5, prj6_6],
    backendTools: ["Node JS", "JWT", "Express JS", "Mongo DB"],
    frontendTools: ["React JS", "React Redux", "Bootstrap"],
    backendSource: "https://github.com/flakorules/calendar-mern-backend",
    frontendSource: "https://github.com/flakorules/calendar-mern-frontend",
    url: "https://mern-calendar-cfcs.herokuapp.com/",
  },


  {
    projectName: "Mantenedor Personas App",
    projectId: 7,
    mainImage: mainImage7,
    description:
      "Aplicación CRUD para manejar los datos de personas.",
    images: [mainImage7, prj7_1, prj7_2, prj7_3, prj7_4, prj7_5, prj7_6, prj7_7],
    backendTools: [".Net Core", "Entity Framework", "PostgreSQL"],
    frontendTools: ["React JS", "Bootstrap"],
    backendSource: "https://github.com/flakorules/cfcs-mantenedor-personas-api",
    frontendSource: "https://github.com/flakorules/cfcs-mantenedor-personas-app",
    url: "https://cfcs-mantenedor-personas.netlify.app/",
  },

];
