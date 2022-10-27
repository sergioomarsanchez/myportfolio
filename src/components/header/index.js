import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web/index";
import { useLocation, Link } from 'react-router-dom'
import logo from '../../assets/logo/logo_white_large.png'


function Header() {
  const [isOpen, setIsOpen]=useState(false);
  const { pathname } = useLocation()
  return (
    <div className="header">
              {
      pathname === '/'?<div><img src={logo} alt='logo'className="logo"/></div>:
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <div className="logo">
        <i class="fi-rr-home option-icon"></i>Home
        </div>
    </Link>
    }
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={()=>setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;