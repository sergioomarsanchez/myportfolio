import React from "react";
import { SocialData } from "../../data/social";
import "./social-contact.css";
import {
  youtube,
  instagram,
  linkedin,
  github,
  mail,
} from "../../../assets/icons/home";
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a key={item.platform} href={item.link} target="_blank" rel="noreferrer" className="anchor">
            {item.icon === "youtube" && (
              <i className="social-icon">{youtube}</i>
            )}
            {item.icon === "instagram" && (
              <i className="social-icon">{instagram}</i>
            )}
            {item.icon === "linkedin" && (
              <i className="social-icon" id="linkedin">
                {linkedin}
              </i>
            )}
            {item.icon === "github" && (
              <i className="social-icon" id="github">
                {github}
              </i>
            )}
            {item.icon === "mail" && (
              <i className="social-icon" id="mail">
                {mail}
              </i>
            )}
            {item.platform}
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
