import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tanguy Frouin </span>
            from <span className="purple"> Lyon, France</span>
            <br />I am a <span className="purple">CS student</span> at the IUT Lyon 1
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Games 🎮 
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Workout 💪
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Listening to music 🎶
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Nothing great has happened without passion"{" "}
          </p>
          <footer className="blockquote-footer">Hengel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
