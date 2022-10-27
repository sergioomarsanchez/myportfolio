import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, I am
         <br /> <span className="info-name">Sergio Omar Sánchez</span>
         <br /> Full Stack Developer
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;