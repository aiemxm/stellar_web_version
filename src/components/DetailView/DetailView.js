import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";
import "./DetailView.css"
import {Skeleton} from "@mui/material";

const DetailView = () => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    const location = useLocation()
    const url = `https://apod.ellanan.com/api?date=${location.state}`;

    const fetchData = async () => {
        await axios.get(url).then(res => {
            setData(res.data)
            setIsLoading(true)
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
        // <div className="detail-view">
        //     <div>
        //         {
        //             (isLoading)
        //                 ? <img className="detail-img" src={data.hdurl} alt=""/>
        //                 : <Skeleton
        //                     variant="rectangular"
        //                     width={450}
        //                     height={350}
        //                     style={{marginRight: 30}}
        //                 />
        //         }
        //         {
        //             (isLoading)
        //                 ? <Paper elevation={5}>
        //                     <div className="detail-title-div">
        //                         <h2 className="detail-title">{data.title}</h2>
        //                         <span>{(data.copyright != null) ? `© ${data.copyright}` : ''}</span>
        //                     </div>
        //                 </Paper>
        //                 : <Skeleton
        //                     variant="rectangular"
        //                     width={450}
        //                     height={20}
        //                     style={{marginTop: 10}}
        //                 />
        //         }
        //     </div>
        //
        //     {
        //         (isLoading)
        //             ? <div>
        //                 <Paper elevation={5} style={{marginLeft: 20}}>
        //                     <p className="detail-text">{data.explanation}</p>
        //                 </Paper>
        //                 <button>Traduire le texte</button>
        //             </div>
        //             : <Skeleton
        //                 variant="rectangular"
        //                 width={400}
        //                 height={300}
        //             />
        //     }
        // </div>

        <div className="detail-container">

            <div className="detail-main">


                {
                    (isLoading)
                        ? <h1 className="detail-title">{data.title}</h1>
                        : <Skeleton className="detail-title"/>

                }

                {
                    (isLoading)
                        ? <img src={data.hdurl} className="detail-img" alt={data.title}/>
                        : <Skeleton className="detail-img" width={1000} height={600}/>
                }

                {
                    (isLoading)

                        ? <p className="detail-explanation-desktop">
                            {data.explanation}
                        </p>
                        : <Skeleton className="detail-explanation-desktop" height={400}/>
                }


                {
                    (isLoading)

                        ? <p className="detail-copyright">
                            {(data.copyright != null) ? `© ${data.copyright}` : ''}
                        </p>

                        : <Skeleton className="detail-copyright" width={300}/>

                }

                {
                    (isLoading)
                 ? <div className="detail-explanation-mobile">
                    <p>{data.explanation}</p>
                </div>
                   : <Skeleton className="detail-explanation-mobile" height={300}/>

                }
            </div>

        </div>


    );
};

export default DetailView;