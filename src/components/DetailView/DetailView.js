import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import "./DetailView.css"
import {Skeleton} from "@mui/material";
import UseNasaApi from "../../hooks/UseNasaApi";

const DetailView = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    const location = useLocation()
    const newApiCall = UseNasaApi(location.state)

    // essayer de mettre isloaded dans le contexte que je peux faire passer du hook au composant
    setTimeout(() => {
        setIsLoaded(true)
    }, 300)


    // useEffect(() => {
    //     const changeWidth = () => setWidth(window.innerWidth);
    //     window.addEventListener("resize", changeWidth);
    //
    //     return () => {
    //         window.removeEventListener("resize", changeWidth);
    //     };
    //
    // }, []);

    return (
        <div className="detail-container">

            {/*//todo: put all skeleton in divs to position correctly*/}
            {/*//todo: create custom component*/}
            <div className="detail-main">

                {
                    (isLoaded)
                        ? <h1 className="detail-title">{newApiCall.title}</h1>
                        : <Skeleton className="detail-title" sx={{bgcolor: 'rgba(23,96,135,0.27)'}}/>

                }

                {
                    (isLoaded)
                        ? <img src={newApiCall.hdurl} className="detail-img" alt={newApiCall.title}/>
                        : <Skeleton className="detail-img" width={1000} height={900}
                                    sx={{bgcolor: 'rgba(23,96,135,0.27)'}}/>
                }

                {
                    (isLoaded)

                        ? (newApiCall.copyright)
                            ? <p className="detail-copyright">
                                {(newApiCall.copyright) ? `© ${newApiCall.copyright}` : ''}
                            </p>
                            : ""
                        : <div style={{position: "absolute", top: "50px", right: "100px"}}>
                            <Skeleton className="detail-copyright" width={300}
                                      sx={{marginTop: "150px", bgcolor: 'rgba(23,96,135,0.27)'}}/>
                        </div>
                }

                {
                    (isLoaded)
                        ? <div className="detail-explanation-mobile">
                            <p>{newApiCall.explanation}</p>
                        </div>

                        : <Skeleton className="detail-explanation-mobile" height={300}
                                    sx={{bgcolor: 'rgba(23,96,135,0.27)'}}/>
                }
            </div>

        </div>


    );
};

export default DetailView;