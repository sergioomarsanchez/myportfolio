import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme";
import Separator from "../../common/separator";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";
function Projects() {
  const data = ProjectData;
  const [isDark] = useContext(ThemeContext)
  return (
    <div className="projects">
      <Separator />
      <label className={isDark?"section-title":"section-titleLight"}>Projects</label>
      <div className="projects-containers">
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;