import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/CV-TanguyFrouin-DevWeb.pdf";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Internship</h3>
            <Resumecontent
              title="Web development"
              date="April 5 2021, 10-12 weeks"
              content={[
                "Passionate about web development, programming and AI, I'm looking for a web dev internship (10-12 weeks from April 5, 2021) to conclude my 2nd year at the IUT.", 
                "Curious by nature, I want to discover the daily life of a fullstack developer in a company."
              ]}
            />
            <h3 className="resume-title">Student Association</h3>
            <Resumecontent
              title="Cafetaria right-hand man and Event left-hand man"
              content={[
                "Organization, planning and management of cultural and sporting events",
                "Inventory management and organization of a cafeteria",
                "Preparation of meals during events",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="University degree of Technology, IUT Lyon 1 "
              date="September 2019 - Present"
              content={[
                `Knowledge of C/C++, Python, Java, SQL, PL/SQL, HTML, CSS, JS, PHP`,
                `Data modeling: UML`,
                `Networks: OSI model, IP addressing, Subnetting, Cisco routers, VLAN`,
                `Initiation to Agile methods: Scrum`,
                `Using Git`,
              ]}
            />
            <Resumecontent
              title="Baccalaureate SSI, L'Oiselet Highschool"
              date="September 2016 - July 2019"
              content={[
                `Scientific, engineering sciences`,
                `Computing specialty`,
                `Euro class Physics-Chemistry`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
