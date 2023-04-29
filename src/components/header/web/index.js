import React, { useContext } from "react";
import './web.css';
import { useLocation, Link } from 'react-router-dom'
import { ThemeContext } from "../../../contexts/theme";


function Web() {
  const { pathname } = useLocation()
  const [isDark] = useContext(ThemeContext)
  return <div className="web">
      <Link to={'/projects'} style={{ textDecoration: 'none'}}>
      <div className={isDark?"web-option":"web-optionLight"} >
        <i className="fi-rr-edit-alt option-icon" style={pathname === '/projects'?{transform: "scale(1.1)", color: isDark? "#82bfc2":"#3f0a0a" }:null }>Projects</i>
      </div>
      </Link>
      <Link to={'/skills'} style={{ textDecoration: 'none' }}>
      <div className={isDark?"web-option":"web-optionLight"}>
      <i className="fi-rr-laptop option-icon" style={pathname === '/skills'?{transform: "scale(1.1)", color: isDark? "#82bfc2":"#3f0a0a" }:null }>Skills</i>
      </div>
      </Link>
      <Link to={'/work'} style={{ textDecoration: 'none' }}>
      <div className={isDark?"web-option":"web-optionLight"}>
      <i className="fi-rr-briefcase option-icon" style={pathname === '/work'?{transform: "scale(1.1)", color: isDark? "#82bfc2":"#3f0a0a" }:null }>Work</i>
      </div>
      </Link>
  </div>;
}

export default Web;