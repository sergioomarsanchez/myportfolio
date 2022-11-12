import React, { useContext } from "react";
import "./work-card.css";
import { ThemeContext } from '../../../contexts/theme'
const  API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
const credenciales = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}`
console.log(credenciales)

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