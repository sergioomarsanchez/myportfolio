import React from "react";
import "./work.css";
import Separator from "../../common/separator";
import {WorkData} from "../../data/work";
import WorkCard from "./work-card";
import cv from "../../data/Sergio Sanchez CV FSD.pdf"
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Experiences</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
      <div className="cv-download">
        <a href={cv} dawnload ><button className="button-85" >For more info, dawnload my cv here</button>
        </a>
      </div>
    </div>
  );  
}

export default Work;