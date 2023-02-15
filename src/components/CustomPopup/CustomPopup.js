import React from 'react';
import "./CustomPopup.css"
import {Marker, Popup} from "react-leaflet";
import { GrLocationPin } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { MdComputer } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const CustomPopup = (props) => {
    return (
            <Marker position={props.position}>
                <Popup permanent>
                    <strong className="popup-texts"><CgProfile fontSize={27}/><span>{props.name}</span></strong>
                    <p className="popup-texts"><MdComputer fontSize={27}/><span>{props.job}</span></p>
                    <p className="popup-texts"><GrLocationPin fontSize={27}/><span>From {props.location}</span></p>
                    <p className="popup-texts"><FaGithub fontSize={27}/><span><a className="gitHub-link" href={props.github} target="_blank" rel="noreferrer">My GitHub</a></span></p>
                </Popup>
            </Marker>
    );
};

export default CustomPopup;
