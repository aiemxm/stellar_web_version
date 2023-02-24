import React from "react";
import "./Random.css";
import useNasaApi from "../../hooks/useNasaApi";
import Loader from "../../components/Loader/Loader";
import CustomButton from "../../components/CustomButton/CustomButton";
import useFormatDate from "../../hooks/useFormatDate";
export default function Random() {
  const getRandomDate = () => {
    let start = new Date("1995-06-16");
    let end = new Date();
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

  const formattedRandomDate = useFormatDate(getRandomDate());

  const fetchRandomPicture = () => {
    request(formattedRandomDate);
  };
  const [loading, data, error, request] = useNasaApi(
    useFormatDate(getRandomDate())
  );

  if (loading) return <Loader />;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null {data.date}</p>;
  return (
    <div className="random-main">
      <h2>Click the button to discover a random picture {data.date}</h2>
      <img src={data.url} alt={data.title} />
      <CustomButton action={"Discover"} handler={fetchRandomPicture} />
    </div>
  );
}
