import React, { useContext } from 'react'
import './templatePopUp.css'
import { ThemeContext } from "../../../contexts/theme";



export default function TemplatePopUp({ content, displayState, handleOnClose, width, height, top}) {
    const [isDark] = useContext(ThemeContext)

    return (

        displayState === "flex" ?
            <div className={isDark?"container":"containerLight"} style={{ display: displayState }} >

                {
                    handleOnClose && content ?

                        <div className={isDark?"popup":"popupLight"} style={{width: width, height: height, top: top ? top : '15vh'}}>
                            <button className={isDark?"close":"closeLight"} onClick={handleOnClose}>x</button>
                            {content}
                        </div>

                        : null
                }

            </div>
            : null

    )
}