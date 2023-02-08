import {useEffect, useState} from "react";

export const Birthday = props => {

    const url = `https://apod.ellanan.com/api?date=`;

    const [birthdayData, setBirthdayData] = useState({});
    const [initialDate, setInitialDate] = useState('')
    const [updatedDate, setUpdatedDate] = useState(initialDate)
    const birthdayInput = document.getElementById('birthdayInput');


    const handleInput = (event) => {
        setInitialDate(event.target.value);
        console.log(initialDate)
    }

    const handleClick = () => {
        if (initialDate.length === 10) {
            setUpdatedDate(initialDate);
        }
        // fetchData(updatedDate);
        console.log(updatedDate)
    }
    const fetchData = async (date) => {
        await fetch(url + date)
            .then(res => {
                res.json()
            })
            .then(data => setBirthdayData(data))

        console.log(birthdayData)
    }

    function test() {
        console.log(birthdayInput)
    }

    useEffect(() => {

        console.log(document.getElementById("birthdayInput").value)
    }, []);


    return (
        <div>
            <h1>Enter your date of birth</h1>
            <input
                className="birthdayInput"
                type="date"
                id="birthdayInput"
                onChange={handleInput}
                value="2022-01-02"
            />
            <button
                type="button"
                onClick={() => console.log(updatedDate)}
            >
                Search
            </button>

            <h3>{birthdayData.title}</h3>
            <img src={birthdayData.url} alt=""/>
        </div>
    );
};