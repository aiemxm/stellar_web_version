import React from "react";

export default function BirthdayPicture(props) {
  return (
    <div className="birthday-picture">
      {props.mediaType === "image" ? (
        <img src={props.url} alt="" />
      ) : (
        <iframe
          title={props.title}
          width="600"
          height="600"
          src={props.url}
          frameBorder="0"
        />
      )}
      <h4>{props.title}</h4>
      <h6>{props.date}</h6>
    </div>
  );
}
