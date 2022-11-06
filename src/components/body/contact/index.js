import React, { useContext } from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import { ThemeContext } from "../../../contexts/theme";
function Contact() {
  const [isDark] = useContext(ThemeContext)
  return (
    <div className="contact">
    <Separator />
    <label className={isDark?"section-title":"section-titleLight"}>Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>Want to get in touch? Contact me on any of these platforms</p>
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;