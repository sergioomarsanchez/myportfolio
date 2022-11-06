import React, { useContext } from "react";
import "./work-card.css";
import { ThemeContext } from '../../../contexts/theme'
function WorkCard ({ item }) {
  const [isDark] = useContext(ThemeContext)
  return (
    <div key={item.company} className="work-card">
      <img src={item.companyLogo}className="work-logo" alt={item.company}/>
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className={isDark?"work-dates":"work-datesLight"}>
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
        <div className="work-location">
          <p>{item.location}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;