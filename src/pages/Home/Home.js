import React, {useContext} from "react";
import './Home.css';
import HomeGrid from "../../components/HomeGrid/HomeGrid";
import {ThemeContext} from "../../Context/ThemeContext";
import UseSetUrl from "../../hooks/UseSetUrl";

export function Home() {
    let url = UseSetUrl("2023-01-14","2023-02-14");

    console.log(url)
    const {theme} = useContext(ThemeContext);
    return (
        <div>
            <h1 className="home-title">Welcome to Stellar</h1>
            <HomeGrid/>
        </div>
    );
}

//todo: mettre ce dossier dans un dossier 'pages'
