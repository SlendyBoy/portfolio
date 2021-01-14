import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming since highschool.
              <br />
              <br />I've learnt
              <i>
                <b className="purple"> Python, Java, C, SQL and a little bit of Matlab. </b>
              </i>
              <br />
              <br /> Web development:
              <i>
                <b className="purple"> HTML, CSS, JS (React), PHP</b>
              </i>
              <br />
              I would like to be a&nbsp;
              <i>
                <b className="purple">
                  fullstack developer
                </b>
              </i>
              <br />
              <br />
              I have many interests and hobbies:
              <i>
                <b className="purple"> Robotics, AI, web dev, sport and video games</b>
              </i>
              <br />
              I'm also a
              <i>
                <b className="purple"> volleyball player</b>
              </i> 
              &nbsp;and like to
              <i>
                <b className="purple"> workout</b>
              </i> 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/slendyboy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tanguy-frouin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:tanguy.frouin121@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i class="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
