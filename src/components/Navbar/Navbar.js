import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
        document.querySelector(".hamburger").classList.toggle("open");
    };
    const currentTab = (isActive) => {
        return isActive
            ? {color: "#4473CF", fontWeight: "bold", fontSize: "19px"}
            : {color: "black"};
    };
    useEffect(() => {
        const changeWidth = () => setWidth(window.innerWidth);
        console.log(window.innerWidth)
        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    return (
        <nav>
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
                    <span></span>
                    <span></span>
                    <span></span>
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
