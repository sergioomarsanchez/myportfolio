import React, { useContext, useEffect, useState } from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import { ThemeContext } from "../../../contexts/theme";
function Contact() {
  const [isDark] = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(0);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(100);
    } else {
      setIsVisible(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="contact">
      <Separator />
      <button
        id={isDark ? "button" : "buttonLight"}
        onClick={scrollToTop}
        style={{ opacity: isVisible }}
        className={isDark ? "noselect" : "noselectLight"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </svg>{" "}
      </button>
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
