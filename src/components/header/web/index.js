import React from "react";
import './web.css';
import { useLocation } from 'react-router-dom'

function Web() {
  const { pathname } = useLocation()
  return <div className="web">
    {
      pathname === '/projects'?null:
      <div className="web-option">
      <a href="projects" >
        <i className="fi-rr-edit-alt option-icon"></i>Projects
      </a>
     </div>
    }
    {
      pathname === '/skills'?null:
      <div className="web-option">
      <a href="skills">
      <i className="fi-rr-laptop option-icon"></i>Skills
      </a>
      </div>
    }
    {
      pathname === '/work'?null:
      <div className="web-option">
      <a href="work">
      <i className="fi-rr-briefcase option-icon"></i>Work
      </a>
      </div>
    }

  </div>;
}

export default Web;