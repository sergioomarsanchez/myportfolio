import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme";
import "./skill-card.css";
function SkillCard({ skill }) {
  const [isDark] = useContext(ThemeContext);
  return (
    <div key={skill.name} className={
      skill.name === "Sprite Sheet Animations"
        ? "skill-card dogCard"
        : "skill-card" 
    }>
      <div
        className={
          skill.name === "Sprite Sheet Animations"
            ? "skill-icon dog"
            : isDark ? "skill-icon" : "skill-icon light" 
        }
      >
        {skill.icon}
      </div>
      <label className="skill-name">{skill.name}</label>
    </div>
  );
}
export default SkillCard;
