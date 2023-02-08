import React from 'react';
import './WorkInProgress.css'
import launch from './launch.jpg';
import {Skeleton} from "@mui/material";

const WorkInProgress = () => {
    return (
        <div className="wip-container">

            <div className="wip-main">


                <h1 className="wip-title">Coming soon</h1>


                <img src={launch} className="wip-img" alt="page coming soon"/>


            </div>

        </div>

    );
};

export default WorkInProgress;
