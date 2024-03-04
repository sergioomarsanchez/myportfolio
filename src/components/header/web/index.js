import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { ThemeContext, LangContext } from "../../../contexts/theme";
import "./web.css";

function Web() {
  const { pathname } = useLocation();
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);
  return (
    <div className="web">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className={isDark ? "web-option" : "web-optionLight"}>
          <i
            className="option-icon"
            style={
              pathname === "/"
                ? {
                    border: "solid",
                    borderWidth: "2px",
                    borderRadius: "15px",
                    borderColor: isDark ? "#89d1d4" : "#790404",
                  }
                : null
            }
          >
            {es ? "Sobre mí" : "About me"}
          </i>
        </div>
      </Link>
      <Link to={"/projects"} style={{ textDecoration: "none" }}>
        <div className={isDark ? "web-option" : "web-optionLight"}>
          <i
            className="option-icon"
            style={
              pathname === "/projects"
                ? {
                    border: "solid",
                    borderWidth: "2px",
                    borderRadius: "15px",
                    borderColor: isDark ? "#89d1d4" : "#790404",
                  }
                : null
            }
          >
            {es ? "Proyectos" : "Projects"}
          </i>
        </div>
      </Link>
      <Link to={"/skills"} style={{ textDecoration: "none" }}>
        <div className={isDark ? "web-option" : "web-optionLight"}>
          <i
            className="option-icon"
            style={
              pathname === "/skills"
                ? {
                    border: "solid",
                    borderWidth: "2px",
                    borderRadius: "15px",
                    borderColor: isDark ? "#89d1d4" : "#790404",
                  }
                : null
            }
          >
            {es ? "Habilidades" : "Skills"}
          </i>
        </div>
      </Link>
      <Link to={"/work"} style={{ textDecoration: "none" }}>
        <div className={isDark ? "web-option" : "web-optionLight"}>
          <i
            className="option-icon"
            style={
              pathname === "/work"
                ? {
                    border: "solid",
                    borderWidth: "2px",
                    borderRadius: "15px",
                    borderColor: isDark ? "#89d1d4" : "#790404",
                  }
                : null
            }
          >
            {es ? "Experiencia" : "Work"}
          </i>
        </div>
      </Link>
      <Link to={"/blog"} style={{ textDecoration: "none" }}>
        <div className={isDark ? "web-option" : "web-optionLight"}>
          <i
            className="option-icon"
            style={
              pathname === "/blog"
                ? {
                    border: "solid",
                    borderWidth: "2px",
                    borderRadius: "15px",
                    borderColor: isDark ? "#89d1d4" : "#790404",
                  }
                : null
            }
          >
            Blog
          </i>
        </div>
      </Link>
    </div>
  );
}

export default Web;
