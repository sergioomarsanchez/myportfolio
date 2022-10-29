import React from "react";
import "./about.css";
import Dog from "../../dog";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        <div>  Hi, I am</div>
         <div className="info-name">Sergio Omar Sánchez</div>
         <div >  Full Stack Developer</div>
        </div>
        <div className="about-text">
          <h3>About me...</h3>
          <p>I did some of my first steps in IT with an Uncompleted System Analyst in IES Siglo XXI, but now I can say it came full circle with Henry's Bootcamp, hence, my logo next to my initials. I also have a bachelor's degree in Management and Purchasing/Sales background, I am a great team player and leader with an excellent customer-oriented mindset. </p>
        </div>
        <div className="about-photo">
        <Dog/>
        </div>
      </div>
    </div>
  );
}

export default About;