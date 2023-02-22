import React from "react";
import { useLocation } from "react-router-dom";
import "./DetailView.css";
import useNasaApi from "../../hooks/useNasaApi";
import LoadedDetailView from "../../components/LoadedDetailView/LoadedDetailView";

import Loader from "../../components/Loader/Loader";

const DetailView = () => {
  const location = useLocation();
  const [loading, data, error] = useNasaApi(location.state);
  if (loading) return <Loader />;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null</p>;

  return (
    <LoadedDetailView
      title={data.title}
      url={data.url}
      copyright={data.copyright}
      explanation={data.explanation}
    />
  );
};

export default DetailView;
