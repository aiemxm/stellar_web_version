import React from "react"
export const DayPictureTile = props => {
    return (
        <div className="card">
            <img src={props.img}/>
            <h3 className="picture-title">{props.title}</h3>
            <span>{props.date}</span>
        </div>
    );
};