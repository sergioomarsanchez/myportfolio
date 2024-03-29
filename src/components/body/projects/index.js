import React, { useContext, useEffect } from "react";
import { ThemeContext, LangContext } from "../../../contexts/theme";
import { ProjectData } from "../../data/projects";
import Separator from "../../common/separator";
import ProjectCard from "./project-card";
import img from "../../../assets/img/The Little Things - Working Windows.png";
import imgScreen from "../../../assets/img/Amigos - Screen.png";
import "./projects.css";

function Projects() {
  const data = ProjectData;
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="projects">
      <div className={isDark ? "tilt" : "tiltLight"}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className={isDark ? "shape-fill" : "shape-fillLight"}
          ></path>
        </svg>
      </div>
      <Separator />
      <div className="title-img">
        <label className={isDark ? "section-title" : "section-titleLight"}>
          {es ? "Proyectos" : "Projects"}
        </label>
        <div className="projects-imgContainer">
          <img
            className={isDark ? "projectImgScreen" : "projectImgScreenLight"}
            src={imgScreen}
            alt=""
          />
          <img
            className={isDark ? "projectImgWindows" : "projectImgWindowsLight"}
            src={img}
            alt=""
          />
        </div>
      </div>
      <div className="projects-containers">
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
