import React, { useContext, useEffect } from "react";
import './mobile.css';
import { useLocation, Link } from 'react-router-dom'
import { ThemeContext } from "../../../contexts/theme";


function Mobile({ isOpen, setIsOpen}) {

  const { pathname } = useLocation()

  const [isDark] = useContext(ThemeContext)

  const app = document.getElementById('app')

  function closeMenu(e){
    if(e.path[0].tagName !== 'I'){
    setIsOpen(false)
  }}
  useEffect(() => {

      if(isOpen)app.addEventListener('click', closeMenu)
      return ()=> app.removeEventListener('click', closeMenu)
  }, [])

  

  return (
  <div className={isDark?"mobile":"mobileLight"}>
    <div className={isDark?"close-icon":"close-iconLight"} onClick={() => setIsOpen(!isOpen)}>
      <i className="fi-rr-cross-circle"></i>
    </div>
    {
      pathname === '/projects'?null:
    <Link to={'/projects'} style={{ textDecoration: 'none' }}>
    <div className={isDark?"mobile-option":"mobile-optionLight"} onClick={() => setIsOpen(!isOpen)}>

          <i className="fi-rr-edit-alt option-icon"></i>Projects

    </div>
    </Link>
    }
    {
      pathname === '/skills'?null:
    <Link to={'/skills'} style={{ textDecoration: 'none' }}>
      <div className={isDark?"mobile-option":"mobile-optionLight"} onClick={() => setIsOpen(!isOpen)}>

          <i className="fi-rr-laptop option-icon"></i>Skills

      </div>  
    </Link>
    }
    {
      pathname === '/work'?null:
      <Link to={'/work'} style={{ textDecoration: 'none' }}>
    <div className={isDark?"mobile-option":"mobile-optionLight"} onClick={() => setIsOpen(!isOpen)}>

        <i className="fi-rr-briefcase option-icon"></i>Work

    </div>
    </Link>
    }
        {
      pathname === '/'?null:
      <Link to={'/'} style={{ textDecoration: 'none' }}>
    <div className={isDark?"mobile-option":"mobile-optionLight"} onClick={() => setIsOpen(!isOpen)}>
 
        <i className="fi-rr-home option-icon"></i>Home

    </div>
    </Link>
    }
  </div>
  );
}

export default Mobile;