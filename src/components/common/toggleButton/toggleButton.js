import React, { useContext } from "react";
import './toggleButton.css'
import { ThemeContext } from "../../../contexts/theme";


export default function ToggleButton ({className}){

    const [isDark, toggleTheme] = useContext(ThemeContext)

    return(
        <div className={className}>
            <input type='checkbox' id='darkMode-toggle' defaultChecked={isDark} onClick={toggleTheme} ></input>
            <label className="label" htmlFor="darkMode-toggle">
                <svg version="1.1" className="sun" viewBox="0 0 96 96" data-name="Ebene 1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M48,9A39,39,0,1,0,87,48,39,39,0,0,0,48,9ZM76.26,65.06A33,33,0,1,1,81,48,32.8,32.8,0,0,1,76.26,65.06Z"/><path d="M68.59,45.07a20.59,20.59,0,0,0-4.25-9.89l3.53-3.53a3,3,0,0,0-4.24-4.25L60,31.07a20.58,20.58,0,0,0-8.89-3.52V24.6a3,3,0,0,0-6,0v2.95A20.5,20.5,0,0,0,36.22,31L32.58,27.4a3,3,0,0,0-4.24,4.25l3.49,3.49a20.64,20.64,0,0,0-4.28,9.93H24.6a3,3,0,0,0,0,6h2.95a20.62,20.62,0,0,0,4,9.52l-3.2,3.1A3,3,0,1,0,32.51,68l3.3-3.2a20.62,20.62,0,0,0,9.26,3.79v2.32a3,3,0,0,0,6,0V68.59a20.59,20.59,0,0,0,9.31-3.82L63.63,68a3,3,0,0,0,4.24,0,3,3,0,0,0,0-4.24l-3.22-3.22a20.71,20.71,0,0,0,3.94-9.48h3.32a3,3,0,0,0,0-6H68.59ZM58.51,58.51a14.76,14.76,0,0,1-20.65.21s0,0,0,0a1.63,1.63,0,0,0-.2-.17,14.77,14.77,0,1,1,20.89,0Z"/></svg>
                <svg version="1.1" className="moon" viewBox="0 0 96 96" data-name="Ebene 1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M48,9A39,39,0,1,0,87,48,39,39,0,0,0,48,9ZM76.26,65.06A33,33,0,1,1,81,48,32.8,32.8,0,0,1,76.26,65.06Z"/><path d="M68.16,55.81a19.59,19.59,0,0,1-24.7-11.63,19.37,19.37,0,0,1,1.74-17,.41.41,0,0,1,0-.09,3,3,0,0,0-3.61-4.34A25.52,25.52,0,0,0,26.36,56.19,25.7,25.7,0,0,0,50.2,72.26a25,25,0,0,0,8.63-1.53A25.29,25.29,0,0,0,71.7,60.25a3,3,0,0,0-3.54-4.44ZM56.77,65.1A19.63,19.63,0,0,1,31.94,54a19.35,19.35,0,0,1,.38-15.29,19.56,19.56,0,0,1,4.39-6.14,25.34,25.34,0,0,0,1.12,13.71,25.62,25.62,0,0,0,23.28,16.6A19.38,19.38,0,0,1,56.77,65.1Z"/></svg>
            </label>
        </div>
    )
}