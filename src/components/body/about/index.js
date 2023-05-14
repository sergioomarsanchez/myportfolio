import React, { useContext, useEffect } from "react";
import "./about.css";
import Dog from "../../dog";
import img from "../../../assets/img/Olá - Relaxing.png";
import { ThemeContext } from "../../../contexts/theme";
import References from "../../common/references";

function About() {
  const [isDark] = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className={isDark ? "triangle" : "triangleLight"}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className={isDark ? "shape-fill" : "shape-fillLight"}
          ></path>
        </svg>
      </div>
      <div className="about-top">
        <div className="about-info">
          <div> Hi, I am</div>
          <div className={isDark ? "info-name" : "info-nameLight"}>
            Sergio Omar Sánchez
          </div>
          <div className={isDark ? "fullDiv" : "fullDivLight"}>
            Full Stack Developer...
          </div>
          <div className="about-imgDiv">
            <img
              className={isDark ? "about-img" : "about-imgLight"}
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className="div-for-mobile">
          <div className="about-text">
            <h3>About me...</h3>
            <p>
              I have a background in both IT and business management, having
              studied Systems Analysis and earned a bachelor's degree from IES
              Siglo XXI college. Recently, I completed a Full Stack Web
              Developer course at Henry to further expand my technical skills.
              With experience in Purchasing/Sales, I have honed my abilities as
              a team player and developed a customer-focused mindset.
            </p>
          </div>
          <div className="about-photo">
            <Dog />
          </div>
        </div>
          <div className="reference">
            <References/>
          </div>
      </div>
    </div>
  );
}

export default About;
