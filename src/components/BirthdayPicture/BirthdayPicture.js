import React from "react";

export default function BirthdayPicture(props) {
  return (
    <div className="birthday-picture">
      <img src={props.url} alt="" />
      <h4>{props.title}</h4>
      <h6>{props.date}</h6>
    </div>
  );
}
