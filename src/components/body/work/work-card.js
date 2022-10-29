import React from "react";
import "./work-card.css";
function WorkCard ({ item }) {
  return (
    <div key={item.company} className="work-card">
      <img src={item.companyLogo}className="work-logo" alt={item.company}/>
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
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