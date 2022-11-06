import React, { useContext } from "react";
import "./about.css";
import Dog from "../../dog";
import { ThemeContext } from "../../../contexts/theme";

function About() {
  const [isDark] = useContext(ThemeContext)

  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        <div>  Hi, I am</div>
         <div className={isDark?"info-name":"info-nameLight"}>Sergio Omar Sánchez</div>
         <div className={isDark?"fullDiv":"fullDivLight"}>Full Stack Developer...</div>
        </div>
        <div className="div-for-mobile">
        <div className="about-text">
          <h3>About me...</h3>
          <p>I did some of my first steps in IT with an Uncompleted System Analyst in IES Siglo XXI, but now I can say it came full circle with Henry's Bootcamp, hence, my logo next to my initials. I also have a bachelor's degree in Management and Purchasing/Sales background, I am a great team player and leader with an excellent customer-oriented mindset. </p>
        </div>
        <div className="about-photo">
        <Dog/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;