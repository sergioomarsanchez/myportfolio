import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { useLocation, Link } from "react-router-dom";
import ToggleButton from "../common/toggleButton/toggleButton";
import ToggleLang from "../common/toggleLang/toggleLang";
import Mobile from "./mobile";
import Web from "./web/index";
import logo from "../../assets/logo/logo_white_large.png";
import logoLight from "../../assets/logo/logo_small.png";
import "./header.css";

function Header() {
  const { pathname } = useLocation();
  const [isDark] = useContext(ThemeContext);

  return (
    <div className={isDark ? "header" : "headerLight"}>
      {pathname === "/" ? (
        <div className="logo">
          {isDark ? (
            <img src={logo} alt="logo" className="logo" />
          ) : (
            <img src={logoLight} alt="logo" className="logo" />
          )}
        </div>
      ) : (
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="logo">
            {isDark ? (
              <img src={logo} alt="logo" className="logo" />
            ) : (
              <img src={logoLight} alt="logo" className="logo" />
            )}
          </div>
        </Link>
      )}
      <div className={isDark ? "menu" : "menuLight"}>
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <Mobile />
        </div>
      </div>
      <div className="toggleContainer">
        <ToggleButton />
        <ToggleLang />
      </div>
    </div>
  );
}

export default Header;
