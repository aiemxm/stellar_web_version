import React from "react";

export default function LoadedDetailView(props) {
  return (
    <div className="detail-main">
      <h1 className="detail-title">{props.title}</h1>
      <img src={props.url} className="detail-img" alt={props.title} />
      {props.copyright && (
        <p className="detail-copyright">
          {props.copyright ? `© ${props.copyright}` : ""}
        </p>
      )}

      <div className="detail-explanation-mobile">
        <p>{props.explanation}</p>
      </div>
    </div>
  );
}
