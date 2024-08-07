import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import headerImg from "../assets/img/profile2.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Frontend Developer", "Web Designer", "UI/UX Designer" ];
  const period = 1500;
  const [show, setShow] = useState(false);



  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 className="headline-text">Hi! I'm <span className="person-name"> Sahaj Maniya</span> <span className="txt-rotate role" data-period="1000" data-rotate='[ "FrontEnd Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                <p>I specialize in Frontend Development and UI/UX Design. 
                Passionate about creating captivating digital experiences, I bring together technical proficiency with creative flair to deliver intuitive solutions. Let's connect and explore opportunities to collaborate.</p>
               <a target="_blank" href="https://drive.google.com/file/d/1SdzMSZef0UxroY_7UfiGQVeECAQlL4-p/view?usp=sharing"  style={{textDecoration:"none"}} > <button >My Resume<ArrowRightCircle size={25} /></button></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      
    </section>
  )
}
