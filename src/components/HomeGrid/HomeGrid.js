import {DayPictureTile} from "../DayPictureTile/DayPictureTile";
import './HomeGrid.css';
import UseNasaOneMonth from "../../hooks/UseNasaOneMonth";

export default function HomeGrid() {
    const newApiCall = UseNasaOneMonth()

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



