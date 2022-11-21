import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme";
import Separator from "../../common/separator";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";
import img from '../../../assets/img/The Little Things - Working Windows.png'
import imgScreen from '../../../assets/img/Amigos - Screen.png'
function Projects() {
  const data = ProjectData;
  const [isDark] = useContext(ThemeContext)
  return (
    <div className="projects">
      <Separator />
      <div className="title-img">
      <label className={isDark?"section-title":"section-titleLight"}>Projects</label>
      <div className="projects-imgContainer">
        <img className={isDark? 'projectImgScreen': 'projectImgScreenLight'} src={imgScreen} alt=''/>  
        <img className={isDark? 'projectImgWindows': 'projectImgWindowsLight'} src={img} alt=''/>
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