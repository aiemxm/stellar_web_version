import React, {useEffect, useState} from 'react';
import {matchRoutes, useLocation} from "react-router-dom";
import axios from "axios";
import "./DetailView.css"
import {Paper, Skeleton} from "@mui/material";

const DetailView = () => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    const url = `https://apod.ellanan.com/api?date=${location.state}`
    const fetchData = async () => {
        await axios.get(url).then(res => {
            setData(res.data)
            setIsLoading(true)
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="detail-view">
            <div>
                {
                    (isLoading)
                        ? <img className="detail-img" src={data.hdurl} alt=""/>
                        : <Skeleton
                            variant="rectangular"
                            width={450}
                            height={350}
                            style={{marginRight: 30}}
                        />
                }
                {
                    (isLoading)
                        ? <Paper elevation={5}>
                            <div className="detail-title-div">
                                <h2 className="detail-title">{data.title}</h2>
                                <span>{(data.copyright != null) ? `© ${data.copyright}` : ''}</span>
                            </div>
                        </Paper>
                        : <Skeleton
                            variant="rectangular"
                            width={450}
                            height={20}
                            style={{marginTop: 10}}
                        />
                }
            </div>

            {
                (isLoading)
                    ? <div>
                        <Paper elevation={5} style={{marginLeft: 20}}>
                            <p className="detail-text">{data.explanation}</p>
                        </Paper>
                        <button>Traduire le texte</button>
                    </div>
                    : <Skeleton
                        variant="rectangular"
                        width={400}
                        height={300}
                    />
            }
        </div>
    );
};

export default DetailView;