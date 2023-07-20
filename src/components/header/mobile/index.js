import React, { useContext } from "react";
import "./mobile.css";
import { useLocation, Link } from "react-router-dom";
import { ThemeContext } from "../../../contexts/theme";

function Mobile({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();
  const [isDark] = useContext(ThemeContext);

  return (
    <div className={isDark ? "mobile" : "mobileLight"}>
      <div
        className={isDark ? "close-icon" : "close-iconLight"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fi-rr-cross-circle"></i>
      </div>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div
          className={isDark ? "mobile-option" : "mobile-optionLight"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className="fi-rr-home option-icon"
            style={
              pathname === "/"
                ? {
                    transform: "scale(1.1)",
                    color: isDark ? "#82bfc2" : "#3f0a0a",
                  }
                : null
            }
          >
            <span className="routeNames">Home</span>
          </i>
        </div>
      </Link>
      <Link to={"/projects"} style={{ textDecoration: "none" }}>
        <div
          className={isDark ? "mobile-option" : "mobile-optionLight"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className="fi-rr-edit-alt option-icon"
            style={
              pathname === "/projects"
                ? {
                    transform: "scale(1.1)",
                    color: isDark ? "#82bfc2" : "#3f0a0a",
                  }
                : null
            }
          >
            <span className="routeNames">Projects</span>
          </i>
        </div>
      </Link>
      <Link to={"/skills"} style={{ textDecoration: "none" }}>
        <div
          className={isDark ? "mobile-option" : "mobile-optionLight"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className="fi-rr-laptop option-icon"
            style={
              pathname === "/skills"
                ? {
                    transform: "scale(1.1)",
                    color: isDark ? "#82bfc2" : "#3f0a0a",
                  }
                : null
            }
          >
            <span className="routeNames">Skills</span>
          </i>
        </div>
      </Link>
      <Link to={"/work"} style={{ textDecoration: "none" }}>
        <div
          className={isDark ? "mobile-option" : "mobile-optionLight"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className="fi-rr-briefcase option-icon"
            style={
              pathname === "/work"
                ? {
                    transform: "scale(1.1)",
                    color: isDark ? "#82bfc2" : "#3f0a0a",
                  }
                : null
            }
          >
            <span className="routeNames">Work</span>
          </i>
        </div>
      </Link>
    </div>
  );
}

export default Mobile;
