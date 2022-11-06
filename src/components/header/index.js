import React, { useContext, useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web/index";
import { useLocation, Link } from 'react-router-dom'
import logo from '../../assets/logo/logo_white_large.png'
import logoLight from '../../assets/logo/logo_small.png'
import { ThemeContext } from "../../contexts/theme";
import ToggleButton from "../common/toggleButton/toggleButton";



function Header() {
  const [isOpen, setIsOpen]=useState(false);
  const { pathname } = useLocation()
  const [isDark] = useContext(ThemeContext)


  return (
    <div className={isDark?"header":"headerLight"}>
              {
      pathname === '/'? <div className="logo">
      { isDark? <img src={logo} alt='logo'className="logo"/>:<img src={logoLight} alt='logo'className="logo"/>
      }
    </div>:
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <div className="logo">
          { isDark? <img src={logo} alt='logo'className="logo"/>:<img src={logoLight} alt='logo'className="logo"/>
          }
        </div>
    </Link>
    }
      <div className={isDark?"menu":"menuLight"}>
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={()=>setIsOpen(!isOpen)}>
            <i className={isDark?"fi-rr-apps menu-icon":"fi-rr-apps menu-iconLight"}></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
      <div className='toggle'>
        <ToggleButton className='toggle'/>
      </div>
    </div>
  );
}

export default Header;