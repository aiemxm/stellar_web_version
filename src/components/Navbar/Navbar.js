import React, {useContext} from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react";
import {ThemeContext} from "../../Context/ThemeContext";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const {theme} = useContext(ThemeContext)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
        document.querySelector(".hamburger").classList.toggle("open");
    };
    const currentTab = (isActive) => {
        return isActive
            ? {color: "#4473CF", fontWeight: "bold", fontSize: "19px"}
            : {color: (theme) ? "#f6f6f6" :"black"};
    };

    const navTheme = (theme) => {
        return theme
            ? { background: "#222" }
            : { background: "white" };
    }

    const hamburgerTheme = (theme) => {
        return theme
            ? {  border: "1px solid white"}
            : {  border: "1px solid black"}

    }
    useEffect(() => {
        const changeWidth = () => setWidth(window.innerWidth);
        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    return (
        <nav style={navTheme(theme)}>
            <h1>Stellar</h1>
            {(toggleMenu || width > 600) && (
                <div className="navlinks-container">
                    <NavLink to="/" style={({isActive}) => currentTab(isActive)}>
                        Home
                    </NavLink>

                    <NavLink
                        to="/birthday"
                        style={({isActive}) => currentTab(isActive)}
                    >
                        Birthday
                    </NavLink>

                    <NavLink to="/random" style={({isActive}) => currentTab(isActive)}>
                        Random
                    </NavLink>

                    <NavLink to="/contact" style={({isActive}) => currentTab(isActive)}>
                        Contact
                    </NavLink>
                </div>
            )}

            <div className="main-navlinks">
                <div className="hamburger" onClick={toggleNav} aria-expanded="false">
                    <span style={hamburgerTheme(theme)}></span>
                    <span style={hamburgerTheme(theme)}></span>
                    <span style={hamburgerTheme(theme)}></span>
                </div>
            </div>

            {/*<button onClick={toggleNav} className="btn">*/}
            {/*    Menu*/}
            {/*</button>*/}
        </nav>
    );
}

export default Navbar;

{
    /*<div className="nav-authentication">*/
}
{
    /*    <div className="sign-btns">*/
}
{
    /*    <button type="button">Sign in</button>*/
}
{
    /*    <button type="button">Sign up</button>*/
}
{
    /*    </div>*/
}
{
    /*</div>*/
}
