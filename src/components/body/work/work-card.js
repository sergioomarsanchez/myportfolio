import React, { useContext, useState } from "react";
import "./work-card.css";
import { ThemeContext } from '../../../contexts/theme'
import TemplatePopUp from "../../common/templatePopUp/templatePopUp";
import Map from "../../common/map/map";
const  API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)
const credenciales = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${API_KEY}`
console.log(credenciales)

function WorkCard ({ item }) {
  const [isDark] = useContext(ThemeContext)
  const [display, setDisplay] = useState('none')

function handleDisplay(){
  setDisplay('none')
}


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
          {/* {item.company.includes('Henry')?null:
          <button onClick={()=>setDisplay('flex')}>Click to see map</button>
          }<TemplatePopUp displayState={display} handleOnClose={handleDisplay} content={<Map googleMapURL={credenciales} containerElement={<div style={{height:"400px"}}/>} mapElement={<div style={{height:"100%"}}/>} loadingElement={<p>Loading</p>}/>} /> */}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;