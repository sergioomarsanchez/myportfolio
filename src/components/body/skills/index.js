import React, { useContext, useEffect } from "react";
import Separator from "../../common/separator/index";
import "./skills.css";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";
import { ThemeContext, LangContext } from "../../../contexts/theme";
function Skills() {
  const data = SkillsData;
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="skills">
      <div className={isDark ? "circleSkill" : "circleLight"}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            className={isDark ? "shape-fill" : "shape-fillLight"}
          ></path>
        </svg>
      </div>
      <Separator />
      <label className={isDark ? "section-title" : "section-titleLight"}>
        {es ? "Habilidades" : "Skills"}
      </label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div key={item.type} className="skills-section">
              <label className="skills-section-title">
                {item.type === "Other" && es ? "Otras" : item.type}
              </label>
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
