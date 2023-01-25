import React, {useEffect, useState} from 'react';
import axios from "axios";
import {DayPictureTile} from "../DayPictureTile/DayPictureTile";
import './HomeGrid.css';
import {Skeleton} from "@mui/material";

export default function HomeGrid() {
    let aMonthAgo = setDateFormat(getDateForWeeksAgo(new Date()))
    let today = setDateFormat(new Date())
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    let url = `https://apod.ellanan.com/api?start_date=${aMonthAgo}&end_date=${today}`;

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

    const fetchData = async () => {
        await axios.get(url).then(res => {
            setData(res.data.reverse());
            setIsLoading(true);
        })
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <ul className="gallery">
            {data.map(item => (

                (isLoading)
                    ? <DayPictureTile
                        obj={item}
                        key={item.date}
                        title={item.title}
                        img={item.url}
                        text={item.explanation}
                        date={item.date}
                    />
                    : <Skeleton
                        variant={"rectangular"}
                        height={250}
                        width={400}
                        sx={{bgcolor: 'grey.900'}}
                    />
            ))}
        </ul>

    );
};



