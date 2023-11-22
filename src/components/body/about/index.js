import React, { useContext, useEffect } from "react";
import "./about.css";
import Dog from "../../dog";
import img from "../../../assets/img/Olá - Relaxing.png";
import { ThemeContext, LangContext } from "../../../contexts/theme";
import References from "../../common/references";
import Blob from "../../common/blob/index";

function About() {
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);
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
          <span>{es ? "Hola, soy" : "Hi, I am"}</span>
          <h1 className={isDark ? "info-name" : "info-nameLight"}>
            Sergio Omar Sánchez
          </h1>
          <h2 className={isDark ? "fullDiv" : "fullDivLight"}>
            {es ? "Desarrollador Front-End..." : "Front-End Developer..."}
          </h2>
          <div className="about-imgDiv">
            <Blob />
            <img
              className={isDark ? "about-img" : "about-imgLight"}
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className="div-for-mobile">
          <div className="about-text">
            <h2>
             { es? "Sobre mí" :
              "About me..."}
              </h2>
            <p>
              {es
                ? "Desarrollador Front-end que se enorgullece de ofrecer experiencias de usuario excepcionales mediante la meticulosa creación de código que se ajusta al diseño previsto, creando sitios web visualmente impactantes y altamente interactivos."
                : "A front-end developer who takes pride in delivering exceptional user experiences by meticulously crafting code that aligns with the intended design, creating visually stunning and highly interactive websites."}
            </p>
          </div>
          <div className="about-photo">
            <Dog />
          </div>
        </div>
        <div className="reference">
          <References />
        </div>
      </div>
    </div>
  );
}

export default About;
