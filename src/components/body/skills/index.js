import React, { useContext, useEffect } from "react";
import Separator from "../../common/separator/index";
import "./skills.css";
import {SkillsData} from "../../data/skills";
import SkillCard from "./skill-card";
import { ThemeContext } from "../../../contexts/theme";
function Skills() {
  const data = SkillsData;
  const [isDark] = useContext(ThemeContext)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="skills">
      <div className={isDark?"circle":"circleLight"}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className={isDark? "shape-fill":"shape-fillLight"}></path>
    </svg>
</div>
      <Separator />
    <label className={isDark?"section-title":"section-titleLight"}>Skills</label>
    <div className="skills-container">
      {data.map((item) => {
        return (
          <div className="skills-section">
            <label className="skills-section-title">{item.type}</label>
            <div className="skills-list">
              {item.list.map((skill) => {
                return <SkillCard skill={skill} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  </div>
 );
}

export default Skills;