import React, { useContext } from "react";
import "./project-card.css";
import { ThemeContext } from '../../../contexts/theme'


function ProjectCard({ project }) {

    const [isDark] = useContext(ThemeContext)
  
  return (
    <div key={project.title} className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className={isDark?"link-button":"link-buttonLight"}>
                <i className="fi-rr-globe"> Demo</i>
              </div>
            </a>
            )}
            {project.github&& (
              <a className="project-link" href={project.github}>
                <div className={isDark?"link-button":"link-buttonLight"}>
                <i className="devicon-github-original"> Github</i>
              </div>
            </a>
            )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag, index)=> {
            return <label key={tag+index} className={isDark?"tag":"tagLight"}>{tag}</label>;
          })}
        </div>
      </div>
       
      {
        project.image && (<a className="project-ytlink"  href={project.videoLink}> <img className={isDark?"project-photo":"project-photoLight"} src={project.image}  alt={project.image} /> </a>)
      }
      <div className={isDark?"tiltBottom":"tiltBottomLight"}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={isDark? "shape-fill":"shape-fillLight"}></path>
          </svg>
      </div>
    </div>
  );
}

export default ProjectCard;