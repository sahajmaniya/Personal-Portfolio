import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { UiProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/campusbites.png";
import projImg2 from "../assets/img/agroplus.png";
import projImg3 from "../assets/img/newsapp.png";
import projImg4 from "../assets/img/eximo.png";
import projImg5 from "../assets/img/agroplusapp.png";
import projImg6 from "../assets/img/loginsignup.png";
import projImg7 from "../assets/img/campusbitesui.png";
import projImg8 from "../assets/img/foodapp.png";
import projImg9 from "../assets/img/antidrone.png";
import projImg10 from "../assets/img/amazonclone.png";
import projImg11 from "../assets/img/netflixclone.png";
import projImg12 from "../assets/img/appleiphone.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ExperienceSection from "./ExperienceSection";



export const Projects = () => {

  const projects = [
    {
      title: "CampusBites",
      description: "Design & Frontend Development",
      imgUrl: projImg1,
      projectLink:"https://github.com/sahajmaniya/campusbites"
    },
    {
      title: "AgroPlus",
      description: "Frontend Development",
      imgUrl: projImg2,
      projectLink:"https://github.com/sahajmaniya/agroplus"
    },
    {
    title: "Apple Iphone",
    description: "Frontend Development",
    imgUrl: projImg12,
    projectLink:"https://apple-iphone-gules.vercel.app/"
    },
    {
      title: "NewsApp",
      description: "Design & Development",
      imgUrl: projImg3,
      projectLink:"https://github.com/sahajmaniya/NewsApp"
    },
    {
      title: "Anti Drone System",
      description: "Frontend Development",
      imgUrl: projImg9,
      projectLink:"https://github.com/sahajmaniya/Anti-Drone-System"
    },
    {
      title: "Amazone Clone",
      description: "Frontend Development",
      imgUrl: projImg10,
      projectLink:"https://github.com/sahajmaniya/AmazonClone"
    },
    {
      title: "Netflix Clone",
      description: "Frontend Development",
      imgUrl: projImg11,
      projectLink:"https://github.com/sahajmaniya/Bharat-Intern/tree/main/Netflix%20clone"

     
    
    },
    
  ];
  const uiprojects = [
    {
      title: "Eximo Internationl",
      description: "UI Design",
      imgUrl: projImg4,
      projectLink:"https://www.figma.com/community/file/1390614877034497584/import-export-websites-ui"
    },
    {
      title: "AgroPlus",
      description: "UI Design",
      imgUrl: projImg5,
      projectLink:"https://www.figma.com/community/file/1352958247793191913/agroplus"
    },
    {
      title: "Login-Signup Flow",
      description: "UI Design",
      imgUrl: projImg6,
      projectLink:"https://www.figma.com/community/file/1352216708452689255/login-signup-page-flow"
    },
    {
      title: "CampusBites",
      description: "UI Design",
      imgUrl: projImg7,
      projectLink:"https://www.figma.com/design/u9GtqOjCP02khTeTLf0kow/CampusBite?node-id=0-1&t=Dd7QrOXO3Tv6yZ6f-1"
    },
    {
      title: "FoodApp",
      description: "UI Design",
      imgUrl: projImg8,
      projectLink:"https://www.figma.com/community/file/1376936179291410711/food-menu-app "
    },
    
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p className="project-text">Experienced Frontend Developer and UI Designer with a strong portfolio of individual and team projects. I create visually appealing, user-friendly web interfaces, blending innovative design with seamless functionality.
</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frontend Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UI Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}  
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          uiprojects.map((project, index) => {
                            return (
                              <UiProjectCard
                                key={index}  
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                          <ExperienceSection/>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
