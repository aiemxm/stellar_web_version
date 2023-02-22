import { DayPictureTile } from "../DayPictureTile/DayPictureTile";
import "./HomeGrid.css";
import useNasaApi from "../../hooks/useNasaApi";
import Loader from "../Loader/Loader";

export default function HomeGrid() {
  const [loading, data, error] = useNasaApi();

  if (loading) return <Loader />;

  if (error !== "") return <p>{error}</p>;

  if (!data) return <p>Data was null</p>;

  return (
    <ul className="gallery">
      {data.reverse().map((item) => (
        <DayPictureTile
          obj={item}
          key={item.date}
          title={item.title}
          img={item.url}
          text={item.explanation}
          date={item.date}
        />
      ))}
    </ul>
  );
}
