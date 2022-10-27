import React from "react";
import './mobile.css';
import { useLocation, Link } from 'react-router-dom'

function Mobile({ isOpen, setIsOpen}) {

  const { pathname } = useLocation()
  

  return (
  <div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i class="fi-rr-cross-circle"></i>
    </div>
    {
      pathname === '/projects'?null:
    <Link to={'/projects'} style={{ textDecoration: 'none' }}>
    <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>

          <i class="fi-rr-edit-alt option-icon"></i>Projects

    </div>
    </Link>
    }
    {
      pathname === '/skills'?null:
    <Link to={'/skills'} style={{ textDecoration: 'none' }}>
      <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>

          <i class="fi-rr-laptop option-icon"></i>Skills

      </div>  
    </Link>
    }
    {
      pathname === '/work'?null:
      <Link to={'/work'} style={{ textDecoration: 'none' }}>
    <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>

        <i class="fi-rr-briefcase option-icon"></i>Work

    </div>
    </Link>
    }
        {
      pathname === '/'?null:
      <Link to={'/'} style={{ textDecoration: 'none' }}>
    <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
 
        <i class="fi-rr-home option-icon"></i>Home

    </div>
    </Link>
    }
  </div>
  );
}

export default Mobile;