import React, { useContext } from "react";
import "./mobile.css";
import { useLocation, Link } from "react-router-dom";
import { ThemeContext, LangContext } from "../../../contexts/theme";
import {
  home,
  work,
  projects,
  skills,
  blogIcon,
} from "../../../assets/icons/home.js";

function Mobile() {
  const { pathname } = useLocation();
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);

  return (
    <div className={isDark ? "mobile" : "mobileLight"}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className={isDark ? "mobile-option" : "mobile-optionLight"}>
          <i
            className="fi-rr-home option-icon"
            style={
              pathname === "/"
                ? {
                    color: isDark ? "#82bfc2" : "#3f0a0a",
                    filter: isDark
                      ? "drop-shadow(0 0 7px #82bfc2"
                      : "drop-shadow(0 0 7px #3f0a0a)",
                  }
                : null
            }
          >
            {home}
            <span className="routeNames">{es ? "Sobre mí" : "About me"}</span>
          </i>
        </div>
      </Link>
      <Link to={"/projects"} style={{ textDecoration: "none" }}>
        <div className={isDark ? "mobile-option" : "mobile-optionLight"}>
          <i
            className="fi-rr-edit-alt option-icon"
            style={
              pathname === "/projects"
                ? {
                    color: isDark ? "#82bfc2" : "#3f0a0a",
                    filter: isDark
                      ? "drop-shadow(0 0 7px #82bfc2"
                      : "drop-shadow(0 0 7px #3f0a0a)",
                    transform: "translateY(-5px)",
                  }
                : {
                    transform: "translateY(-5px)",
                  }
            }
          >
            {projects}
            <span className="routeNames">{es ? "Proyectos" : "Projects"}</span>
          </i>
        </div>
      </Link>
      <Link to={"/skills"} style={{ textDecoration: "none" }}>
        <div className={isDark ? "mobile-option" : "mobile-optionLight"}>
          <i
            className="fi-rr-laptop option-icon"
            style={
              pathname === "/skills"
                ? {
                    color: isDark ? "#82bfc2" : "#3f0a0a",
                    filter: isDark
                      ? "drop-shadow(0 0 7px #82bfc2"
                      : "drop-shadow(0 0 7px #3f0a0a)",
                    transform: "translateY(-5px)",
                  }
                : {
                    transform: "translateY(-5px)",
                  }
            }
          >
            {skills}
            <span className="routeNames">{es ? "Habilidades" : "Skills"}</span>
          </i>
        </div>
      </Link>
      <Link to={"/work"} style={{ textDecoration: "none" }}>
        <div className={isDark ? "mobile-option" : "mobile-optionLight"}>
          <i
            className="fi-rr-briefcase option-icon"
            style={
              pathname === "/work"
                ? {
                    color: isDark ? "#82bfc2" : "#3f0a0a",
                    filter: isDark
                      ? "drop-shadow(0 0 7px #82bfc2"
                      : "drop-shadow(0 0 7px #3f0a0a)",
                    transform: "translateY(-5px)",
                  }
                : {
                    transform: "translateY(-5px)",
                  }
            }
          >
            {work}
            <span className="routeNames">{es ? "Experiencia" : "Work"}</span>
          </i>
        </div>
      </Link>
      <Link to={"/blog"} style={{ textDecoration: "none" }}>
        <div className={isDark ? "mobile-option" : "mobile-optionLight"}>
          <i
            className="fi-rr-briefcase option-icon"
            style={
              pathname === "/blog"
                ? {
                    color: isDark ? "#82bfc2" : "#3f0a0a",
                    filter: isDark
                      ? "drop-shadow(0 0 7px #82bfc2"
                      : "drop-shadow(0 0 7px #3f0a0a)",
                  }
                : null
            }
          >
            {blogIcon}
            <span className="routeNames">Blog</span>
          </i>
        </div>
      </Link>
    </div>
  );
}

export default Mobile;
