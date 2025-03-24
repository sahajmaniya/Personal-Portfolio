import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import HackathonSection from './components/HackathonSection';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { HelmetProvider } from "react-helmet-async";
import SEO from './components/SEO';



function App() {
  return (
    <HelmetProvider>
    <div className="App">
    <SEO/>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <HackathonSection/>
      <Contact/>
      <Footer/>
      <SpeedInsights/>  
    </div>
    </HelmetProvider>
  );
}

export default App;
