import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme";
import "./skill-card.css";
function SkillCard({ skill }) {
  const [isDark] = useContext(ThemeContext)
  return (
   <div key={skill.name} className="skill-card">
     <div className="skill-icon">{skill.icon}</div>
     <label className="skill-name">{skill.name}</label>
     <div className={isDark?"curve":"curveLight"}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className={isDark? "shape-fill":"shape-fillLight"}></path>
        </svg>
    </div>
   </div>
  );
}
export default SkillCard;