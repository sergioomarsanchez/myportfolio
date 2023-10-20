import React, { useContext } from "react";
import "./work-card.css";
import { ThemeContext, LangContext } from "../../../contexts/theme";

function WorkCard({ item }) {
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);

  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo" alt={item.company} />
      <div className="work-info">
        <label className="company-name">
          {es ? item.es.company : item.company}
        </label>
        <div className={isDark ? "work-dates" : "work-datesLight"}>
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{es ? item.es.work : item.work}</p>
        </div>
        <div className="work-location">
          <p>{es ? item.es.location : item.location}</p>
        </div>
      </div>
      <div className={isDark ? "invertedCircle" : "invertedCircleLight"}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            className={isDark ? "shape-fill" : "shape-fillLight"}
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default WorkCard;
