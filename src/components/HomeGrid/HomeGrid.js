import React, {useEffect, useState} from 'react';
import axios from "axios";
import {DayPictureTile} from "../DayPictureTile/DayPictureTile";
import './HomeGrid.css';

export default function HomeGrid() {
    // let apiData = new DAO();
    let aMonthAgo = setDateFormat(getDateForWeeksAgo(new Date()))
    let today = setDateFormat(new Date())
    const [data, setData] = useState([]);
    let url = `https://api.nasa.gov/planetary/apod?api_key=Vv8c1bsJK7bHuIDRy3VD9agAoKs337WJA1zQP5k1&start_date=${aMonthAgo}&end_date=${today}`;

    // GET RIGHT DATE FORMAT
    function setDateFormat(date = new Date()) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    // Get the date one month ago
    function getDateForWeeksAgo(date) {
        const daysAgo = new Date(date.getTime());
        daysAgo.setDate(date.getDate() - 28);
        return daysAgo;
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                url,
            );
            setData(result.data.reverse());
        };
        fetchData();
    }, []);


    return (
        <ul className="gallery">
            {data.map(item => (
                <DayPictureTile key={item.date} title={item.title} img={item.url} text={item.explanation} date={item.date}/>
            ))}
        </ul>
    );
};



