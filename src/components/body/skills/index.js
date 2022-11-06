import React, { useContext } from "react";
import Separator from "../../common/separator/index";
import "./skills.css";
import {SkillsData} from "../../data/skills";
import SkillCard from "./skill-card";
import { ThemeContext } from "../../../contexts/theme";
function Skills() {
  const data = SkillsData;
  const [isDark] = useContext(ThemeContext)
  return (
    <div className="skills">
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