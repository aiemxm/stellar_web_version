import React, { useLocation } from "react";
import UseNasaApi from "../../hooks/UseNasaApi";
export default function LoadedDetailView() {
  const location = useLocation();
  const newApiCall = UseNasaApi(location.state);
//todo: faire marcher ce composant pour un résultat ultra propre 
  return (
    <div className="detail-main">
      <h1 className="detail-title">{newApiCall.title}</h1>
      <img
        src={newApiCall.hdurl}
        className="detail-img"
        alt={newApiCall.title}
      />
      {newApiCall.copyright && (
        <p className="detail-copyright">
          {newApiCall.copyright ? `© ${newApiCall.copyright}` : ""}
        </p>
      )}

      <div className="detail-explanation-mobile">
        <p>{newApiCall.explanation}</p>
      </div>
    </div>
  );
}
