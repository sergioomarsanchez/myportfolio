import React from "react";
import "./about.css";
import Dog from "../../dog";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, I am
         <br /> <span className="info-name">Sergio Omar Sánchez</span>
         <br /> Full Stack Developer
        </div>
        <div className="about-text">
          <p>I am a Full Stack Developer. With a bachelor's degree in Management and Purchasing/Sales background, a great team player and leader with an excellent customer-oriented mindset. I also did some of my first steps in IT with an Uncompleted System Analyst in IES Siglo XXI, but now I can say it came full circle with Henry's Bootcamp, hence my logo next to my initials.</p>
        </div>
        <div className="about-photo">
        <Dog/>
        </div>
      </div>
    </div>
  );
}

export default About;