import React, { useContext } from "react";
import "./about.css";
import Dog from "../../dog";
import img from '../../../assets/img/Olá - Relaxing.png'
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
        <div className="about-imgDiv">
          <img className={isDark?"about-img":"about-imgLight"} src={img} alt=''/>
        </div>
        </div>
        <div className="div-for-mobile">
        <div className="about-text">
          <h3>About me...</h3>
          <p>I started off my career in IT many years ago studying Systems Analysis at the IES Siglo XXI college. In the same institution, I got a bachelor's degree in Busines Management and now I've completed my IT education with the Full Stack Web Developer course at Henry. I've worked in Purchasing/Sales where I developed skills as a team player and a customer-focused mindset.</p>
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