import {useEffect, useState} from 'react';
import UseSetUrl from "./UseSetUrl";
import UseFormatDate from "./UseFormatDate";

export default function UseNasaApi(date) {

    const [data, setData] = useState([]);
    let today = UseFormatDate(new Date())
    let aMonthAgo = UseFormatDate(getDateForWeeksAgo(new Date()))
    let url = date ? UseSetUrl(date) : UseSetUrl(aMonthAgo, today);




    function getDateForWeeksAgo(date) {
        const daysAgo = new Date(date.getTime());
        daysAgo.setDate(date.getDate() - 28);
        return daysAgo;
    }

    async function fetchData() {
        await fetch(url)
            .then(res => res.json())
            .then(array => setData(date ? array : array.reverse()))
    }

    useEffect(() => {
        fetchData();
    }, [])


    return data;

};

