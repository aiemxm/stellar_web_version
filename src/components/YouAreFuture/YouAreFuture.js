import React from "react";
import "./YouAreFuture.css";
import future from "../../assets/images/future.jpg";
export default function YouAreFuture() {
  return (
    <div className="future-main">
      <img src={future} alt="You are in the future" />
      {/* <p>You are in the future, my friend ...</p> */}
    </div>
  );
}
