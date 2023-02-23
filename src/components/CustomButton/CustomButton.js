import React from "react";
import "./CustomButton.css";

export default function CustomButton(props) {
  const handler = props.handler;

  return (
    <button
      onClick={(e) => {
        const el = e.target;
        let x = (e.clientX - el.offsetLeft) / el.offsetWidth;
        let y = (e.clientY - el.offsetTop) / el.offsetHeight;

        document.documentElement.style.setProperty('--wavecoord-x', x)
        document.documentElement.style.setProperty('--wavecoord-y', y)
        handler();
      }}
      className="custom_btn"
    >
      {props.action}
    </button>
  );
}
