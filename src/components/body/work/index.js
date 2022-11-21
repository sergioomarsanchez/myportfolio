import React, { useContext } from "react";
import "./work.css";
import Separator from "../../common/separator";
import {WorkData} from "../../data/work";
import WorkCard from "./work-card";
import cv from "../../data/Sergio Sanchez CV FSD.pdf"
import { ThemeContext } from "../../../contexts/theme";
import img from '../../../assets/img/Amigos - Working from Home.png'
import imgCat from '../../../assets/img/The Little Things - Cat.png'


function Work() {
  const data = WorkData;
  const [isDark] = useContext(ThemeContext)
  return (
    <div className="work">
      <Separator />
      <div className="title-img">
      <label className={isDark?"section-title":"section-titleLight"}>Experiences</label>
      <div className="work-imgContainer">
      <span>Z</span>
        <img className={isDark? 'workImgCat': 'workImgCatLight'} src={imgCat} alt=''/>  
        <img className={isDark? 'workImgMan': 'workImgManLight'} src={img} alt=''/>
      </div>
      </div>
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