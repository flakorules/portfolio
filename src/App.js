import "./App.css";
import { Navbar } from "./Components/UI/Navbar";
import { Masterhead } from "./Components/UI/Masterhead";
import { About } from "./Components/UI/About";
import { Contact } from "./Components/UI/Contact";
import { Footer } from "./Components/UI/Footer";
import { Copyright } from "./Components/UI/Copyright";
import { Portfolio } from "./Components/UI/Portfolio";
import { Skills } from "./Components/UI/Skills";
import { Resume } from "./Components/UI/Resume";

function App() {
  return (
    <>
      {/* <!-- Navigation--> */}
      <Navbar />
      {/* <!-- Masthead--> */}
      <Masterhead />
      {/* <!-- About Section--> */}
      <About />
      {/* <!-- About Section--> */}
      {/* <!-- Skills Section--> */}
      <Skills />

      {/* <!-- Portfolio Section--> */}
      <Portfolio />

      <Resume />
      {/* <!-- Contact Section--> */}

      <Contact />
      {/* <!-- Footer--> */}
      <Footer />
      {/* <!-- Copyright Section--> */}
      <Copyright />
    </>
  );
}

export default App;
