import React, { useContext, useEffect } from "react";
import "./work.css";
import Separator from "../../common/separator";
import { WorkData } from "../../data/work";
import WorkCard from "./work-card";
import cv from "../../data/Sergio Sanchez CV A.pdf";
import { ThemeContext } from "../../../contexts/theme";
import img from "../../../assets/img/Amigos - Working from Home.png";
import imgCat from "../../../assets/img/The Little Things - Cat.png";

function Work() {
  const data = WorkData;
  const [isDark] = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="work">
      <div className={isDark ? "circles" : "circlesLight"}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className={isDark ? "shape-fill" : "shape-fillLight"}
          ></path>
        </svg>
      </div>
      <Separator />
      <div className="title-img">
        <label className={isDark ? "section-title" : "section-titleLight"}>
          Experiences
        </label>
      </div>
      <div className="work-imgContainer">
        <div className="catContainer">
          <img
            className={isDark ? "workImgCat" : "workImgCatLight"}
            src={imgCat}
            alt=""
          />
          <span>Z</span>
        </div>
        <img
          className={isDark ? "workImgMan" : "workImgManLight"}
          src={img}
          alt=""
        />
      </div>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard key={item.company} item={item} />;
        })}
      </div>
      <div className="cv-download">
        <a href={cv} download>
          <button className={isDark ? "button-85" : "button-85Light"}>
            For more info, download my cv here
          </button>
        </a>
        <span> Or </span>
        <a
          href="https://calendly.com/sanchez-omar-sergio/experiment1et"
          target="_blank"
          rel="noreferrer"
        >
          <button className={isDark ? "calendly" : "calendlyLight"}>
            Schedule a meeting
          </button>
        </a>
      </div>
    </div>
  );
}

export default Work;
