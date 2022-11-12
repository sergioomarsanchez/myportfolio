import React, { useContext } from "react";
import "./work.css";
import Separator from "../../common/separator";
import {WorkData} from "../../data/work";
import WorkCard from "./work-card";
import cv from "../../data/Sergio Sanchez CV FSD.pdf"
import { ThemeContext } from "../../../contexts/theme";


function Work() {
  const data = WorkData;
  const [isDark] = useContext(ThemeContext)
  return (
    <div className="work">
      <Separator />
      <label className={isDark?"section-title":"section-titleLight"}>Experiences</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
      <div className="cv-download">
        <a href={cv} download ><button className={isDark?"button-85":"button-85Light"} >For more info, download my cv here</button>
        </a>
      </div>
    </div>
  );  
}

export default Work;