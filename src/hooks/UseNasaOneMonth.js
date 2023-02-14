import {useEffect, useState} from 'react';

export default function UseNasaOneMonth() {

    const [data, setData] = useState([]);

    let today = setDateFormat(new Date())
    let aMonthAgo = setDateFormat(getDateForWeeksAgo(new Date()))
    let url = `https://apod.ellanan.com/api?start_date=${aMonthAgo}&end_date=${today}`;


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
            .then(() => console.log(data))
    }

    useEffect(() => {
        fetchData();
    }, [])


    return data;

};

