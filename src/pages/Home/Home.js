import React, {useContext} from "react";
import './Home.css';
import HomeGrid from "../../components/HomeGrid/HomeGrid";
import {ThemeContext} from "../../Context/ThemeContext";

export function Home() {

    const {theme} = useContext(ThemeContext);
    return (
        <div>
            <h1 className="home-title">Welcome to Stellar</h1>
            <HomeGrid/>
        </div>
    );
}

//todo: mettre ce dossier dans un dossier 'pages'
