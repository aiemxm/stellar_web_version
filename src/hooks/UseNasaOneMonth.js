import {useEffect, useState} from 'react';
import UseSetUrl from "./UseSetUrl";

export default function UseNasaOneMonth() {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    let today = setDateFormat(new Date())
    let aMonthAgo = setDateFormat(getDateForWeeksAgo(new Date()))
    let url = UseSetUrl(aMonthAgo, today);


    function setDateFormat(date = new Date()) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    function getDateForWeeksAgo(date) {
        const daysAgo = new Date(date.getTime());
        daysAgo.setDate(date.getDate() - 28);
        return daysAgo;
    }

    async function fetchData() {
        await fetch(url)
            .then(res => res.json())
            .then(array => setData(array))
    }

    useEffect(() => {
        fetchData();
        setIsLoaded(true);
    }, [])


    return data;

};

