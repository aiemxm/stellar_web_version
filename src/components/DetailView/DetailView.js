import React, {useEffect, useState} from 'react';
import {matchRoutes, useLocation} from "react-router-dom";
import axios from "axios";
import "./DetailView.css"
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import {Paper, Skeleton} from "@mui/material";
import {saveAs} from 'file-saver';

const DetailView = () => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    // const url = `https://apod.ellanan.com/api?date=${location.state}`
    let url = `https://api.nasa.gov/planetary/apod?api_key=Vv8c1bsJK7bHuIDRy3VD9agAoKs337WJA1zQP5k1&date=${location.state}`;

    const fetchData = async () => {
        await axios.get(url).then(res => {
            setData(res.data)
            setIsLoading(true)
        });
    };

    const downloadImage = () => {
        let imgUrl = data.url
        console.log(imgUrl)
        saveAs(imgUrl, `${data.url}`)
    }


    useEffect(() => {
        fetchData();
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


        <div id="container">

            <div className="product-details">

                <h1>{data.title}</h1>
                <CloudDownloadOutlinedIcon onClick={downloadImage}/>
                <span className="hint-star star">
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star-o" aria-hidden="true"></i>
	</span>

                <p className="information">{data.explanation}</p>


            </div>

            <div className="product-image">

                <img
                    src={data.hdurl}
                    alt=""
                />


                <div className="info">
                    <h2>More info</h2>
                    <ul>
                        <li>Date: {data.date}</li>
                        {
                            (data.copyright != null)
                                ? <li>Copyright: {data.copyright}</li>
                                : ''
                        }
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default DetailView;