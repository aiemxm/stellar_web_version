import React, {useEffect, useState} from "react"
import CardHover from "../CardHover/CardHover";

export const DayPictureTile = props => {


    return (
        <li>
            <img className="picture" src={props.img}/>
            <CardHover obj={props.obj} title={props.title} date={props.date} text={props.text}/>
        </li>
    );
};