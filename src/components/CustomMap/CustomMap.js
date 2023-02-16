import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./CustomMap.css";
import CustomPopup from "../CustomPopup/CustomPopup";
import profiles from "../../data/profiles.json";

const CustomMap = () => {
  const elliot = profiles[0];
  const maxime = profiles[1];
  const france = profiles[2];

  return (
    <MapContainer
      center={france.coordinates}
      zoom={6}
      position="topright"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <CustomPopup
        position={elliot.coordinates}
        name={elliot.name}
        job={elliot.job}
        location={elliot.location}
        github={elliot.github}
      />
      <CustomPopup
        position={maxime.coordinates}
        name={maxime.name}
        job={maxime.job}
        location={maxime.location}
        github={maxime.github}
      />
    </MapContainer>
  );
};

export default CustomMap;
