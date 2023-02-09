import React, {useContext} from 'react';
import "./BtnToggle.css"
import {ThemeContext} from "../../Context/ThemeContext";

const BtnToggle = () => {
    const {toggleTheme, theme} = useContext(ThemeContext);


    return (
        // <button
        //     onClick={toggleTheme}
        //     className={theme ? "btn-toggle" : "btn-toggle dark-btn"}>
        //     Switch to {theme ? "Light" : "Dark"}
        // </button>
        // <div onClick={toggleTheme} className={theme ? "btn-toggle" : "btn-toggle dark-btn"}>
        //
        //     <div className="toggle-btn" id="_3rd-toggle-btn">
        //         <input type="checkbox"/>
        //         <span></span>
        //     </div>
        // </div>
        <div onClick={toggleTheme} className={theme ? "btn-toggle" : "btn-toggle"}>
            <input className="l" type="checkbox" />
        </div>

    )

}
export default BtnToggle;
