import React, {useEffect, useState} from "react"
import CardHover from "../CardHover/CardHover";

export const DayPictureTile = props => {


    return (
        <li>
            <img className="picture" src={props.img}/>
            <CardHover title={props.title} text={props.text}/>

        </li>
    );
};