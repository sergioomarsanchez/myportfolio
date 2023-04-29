import React, { useContext } from "react";
import './web.css';
import { useLocation, Link } from 'react-router-dom'
import { ThemeContext } from "../../../contexts/theme";


function Web() {
  const { pathname } = useLocation()
  const [isDark] = useContext(ThemeContext)
  return <div className="web">
      <Link to={'/projects'} style={{ textDecoration: 'none', color: pathname === '/projects'?"red": null }}>
      <div className={isDark?"web-option":"web-optionLight"}>
        <i className="fi-rr-edit-alt option-icon">Projects</i>
      </div>
      </Link>
    {
      pathname === '/skills'?null:
      <Link to={'/skills'} style={{ textDecoration: 'none' }}>
      <div className={isDark?"web-option":"web-optionLight"}>
      <i className="fi-rr-laptop option-icon">Skills</i>
      </div>
      </Link>
    }
    {
      pathname === '/work'?null:
      <Link to={'/work'} style={{ textDecoration: 'none' }}>
      <div className={isDark?"web-option":"web-optionLight"}>
      <i className="fi-rr-briefcase option-icon">Work</i>
      </div>
      </Link>
    }
  </div>;
}

export default Web;