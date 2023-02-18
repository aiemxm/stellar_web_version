import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DetailView.css";
import UseNasaApi from "../../hooks/UseNasaApi";
import CustomSkeleton from "../../components/CustomSkeleton/CustomSkeleton";
import LoadedDetailView from "../../components/LoadedDetailView/LoadedDetailView";
import { ThemeContext } from "../../Context/ThemeContext";

const DetailView = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();
  const { loaded } = useContext(ThemeContext);
  const newApiCall = UseNasaApi(location.state);

  useEffect(() => {
    // setIsLoaded(true);
    const changeWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return loaded ? (
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
  ) : (
    <CustomSkeleton />
  );
};

export default DetailView;
