import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./CustomMap.css";
import CustomPopup from "../CustomPopup/CustomPopup";

const CustomMap = () => {
  const france = [46.603354, 1.8883335];
  const toulouse = [43.6, 1.433333];
  const paris = [48.8588897, 2.320041];

  return (
    <MapContainer
      center={france}
      zoom={6}
      position="topright"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <CustomPopup
        position={paris}
        name="Elliot"
        job="iOS Developer"
        location="Paris"
        github="https://github.com/Harry-KNIGHT"
      />
      <CustomPopup
        position={toulouse}
        name="Maxime"
        job="Web Developer"
        location="Toulouse"
        github="https://github.com/aiemxm"
      />

      {/*<Marker position={toulouse}>*/}
      {/*    <Popup permanent>*/}
      {/*        Maxime <br/>*/}
      {/*        Web Developer <br/>*/}
      {/*        From Toulouse <br/>*/}
      {/*        <a className="gitHub-link" href="https://github.com/aiemxm" target="_blank" rel="noreferrer">My GitHub</a>*/}
      {/*    </Popup>*/}
      {/*</Marker>*/}
    </MapContainer>
  );
};

export default CustomMap;
