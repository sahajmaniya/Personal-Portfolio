import { Col } from "react-bootstrap";
import githubimg from "../assets/img/github.png";
import reactpng from "../assets/img/figmalogo.png";
import livedemoimg from "../assets/img/livedemo.png";

function ProjectCard({ title, description, imgUrl,projectLink })  {
const specificGithubImg = title === "Apple Iphone" ? livedemoimg : githubimg;

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      
        <img src={imgUrl} style={{maxHeight:"240px", objectFit:"cover"}}/>
      
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a target="_blank"  href={projectLink}> <img style={{width:"25px", marginTop:"10px"}} src={specificGithubImg} /></a>
        </div>
      </div>
    </Col>
  )
}

function UiProjectCard({ title, description, imgUrl,projectLink })  {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      
        <img src={imgUrl} />
      
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
  <a target="_blank"  href={projectLink}> <img style={{width:"30px",  marginTop:"10px" }} src={reactpng} /></a>
        </div>
      </div>
    </Col>
  )
}

export { ProjectCard, UiProjectCard };
