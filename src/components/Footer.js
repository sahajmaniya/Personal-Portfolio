import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/LOGO.png";
import navIcon1 from "../assets/img/whatsapp.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="sahaj-logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://wa.me/9638150404" target="_blank" rel="noopener noreferrer">
  <img src={navIcon1} alt="Icon" />
</a>
              <a href="https://www.facebook.com/profile.php?id=100075120465471&mibextid=ZbWKwL"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/sahajmaniya_?igsh=ZW4yejF6bmticzUx"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
