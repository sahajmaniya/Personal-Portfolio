import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/react.png";
import meter5 from "../assets/img/figma.png";
import meter6 from "../assets/img/wordpress.png";
import meter7 from "../assets/img/vite-logo.png";
import meter8 from "../assets/img/Bootstrap_logo.png";
import meter9 from "../assets/img/Tailwind_CSS_Logo.png";
import meter10 from "../assets/img/C_Logo.png";
import meter11 from "../assets/img/white-mark.png";
import meter12 from "../assets/img/gsaplogo.png";
import meter13 from "../assets/img/canva-icon.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className="skill-text">
                Skilled Frontend Developer and UI Designer with expertise<br />
                in HTML, CSS, JavaScript, and modern frameworks.
              </p>
              <Carousel autoPlay="true" autoPlaySpeed="3000" responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="HTML5" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Javascript" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Figma" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Wordpress" />
                  <h5>Wordpress</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Vite" />
                  <h5>Vite</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="TailwindCSS" />
                  <h5>TailwindCSS</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="C" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={meter11} alt="Framer" />
                  <h5>Framer</h5>
                </div>
                <div className="item">
                  <img src={meter12} alt="GSAP" />
                  <h5>GSAP</h5>
                </div>
                <div className="item">
                  <img src={meter13} alt="Canva" />
                  <h5>Canva</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};