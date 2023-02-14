import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";
import "./DetailView.css"
import {Skeleton} from "@mui/material";

const DetailView = () => {
    const [data, setData] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    const location = useLocation()
    const url = `https://apod.ellanan.com/api?date=${location.state}`;

    const fetchData = async () => {
        await axios.get(url).then(res => {
            setData(res.data)
            setIsLoaded(true)
            document.querySelector('body').style.backgroundImage = res.data.url
        });
    };

    useEffect(() => {
        fetchData();
        const changeWidth = () => setWidth(window.innerWidth);
        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };

    }, []);

    return (
        <div className="detail-container">

            {/*//todo: put all skeleton in divs to position correctly*/}
            {/*//todo: create custom component*/}
            <div className="detail-main">

                {
                    (isLoaded)
                        ? <h1 className="detail-title">{data.title}</h1>
                        : <Skeleton className="detail-title" sx={{ bgcolor: 'rgba(23,96,135,0.27)' }}/>

                }

                {
                    (isLoaded)
                        ? <img src={data.hdurl} className="detail-img" alt={data.title}/>
                        : <Skeleton className="detail-img" width={1000} height={900} sx={{ bgcolor: 'rgba(23,96,135,0.27)' }} />
                }

                {
                    (isLoaded)

                        ? (data.copyright)
                            ? <p className="detail-copyright">
                                {(data.copyright) ? `© ${data.copyright}` : ''}
                            </p>
                            : ""
                        : <div style={{ position: "absolute", top: "50px", right: "100px" }}>
                            <Skeleton className="detail-copyright" width={300} sx={{  marginTop: "150px", bgcolor: 'rgba(23,96,135,0.27)' }}/>
                        </div>
                }

                {
                    (isLoaded)
                        ? <div className="detail-explanation-mobile">
                            <p>{data.explanation}</p>
                        </div>

                        : <Skeleton className="detail-explanation-mobile" height={300} sx={{ bgcolor: 'rgba(23,96,135,0.27)' }}/>
                }
            </div>

        </div>


    );
};

export default DetailView;