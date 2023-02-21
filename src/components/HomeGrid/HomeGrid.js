import {DayPictureTile} from "../DayPictureTile/DayPictureTile";
import './HomeGrid.css';
import UseNasaApi from "../../hooks/UseNasaApi";

export default function HomeGrid() {
    const newApiCall = UseNasaApi()

    return (
        <ul className="gallery">
            {newApiCall.map(item => (
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
};



