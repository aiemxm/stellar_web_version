import React, {useEffect, useState} from 'react';
import {Outlet, useParams, useLocation} from "react-router-dom";
import axios from "axios";
import "./DetailView.css"

const DetailView = (props) => {
    const params = useParams()
    const [data, setData] = useState({})
    const location = useLocation()
    const url = `https://apod.ellanan.com/api?date=${location.state}`
    const fetchData = async () => {
        const result = await axios.get(
            url,
        );
        setData(result.data)
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="detail-view">
            <div>
                <img className="detail-img" src={data.hdurl} alt=""/>
                <div className="detail-title-div">
                    <h2 className="detail-title">{data.title}</h2>
                    <span>{(data.copyright != null) ? `© ${data.copyright}` : ''}</span>
                </div>
            </div>
            <div>
                <p className="detail-text">{data.explanation}</p>
            </div>

        </div>
    );
};

export default DetailView;