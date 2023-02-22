import React from "react";
import "./Home.css";
import HomeGrid from "../../components/HomeGrid/HomeGrid";

export function Home() {
  return (
    <div>
      <h1 className="home-title">Welcome to Stellar</h1>
      <HomeGrid />
    </div>
  );
}
