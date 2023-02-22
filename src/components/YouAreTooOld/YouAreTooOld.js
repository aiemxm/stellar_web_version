import React from "react";
import dino from "../../assets/images/dino.png"
import "./YouAreTooOld.css"
export default function YouAreTooOld() {
  return (<div className="fossil">
    <img src={dino} alt="dinosaur"/>
    <h2>You are too old, my friend ...</h2>
  </div>);
}
