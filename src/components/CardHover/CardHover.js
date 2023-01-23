import React, {useState} from 'react';
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

const CardHover = (props) => {
    const [showMore, setShowMore] = useState(false);
    const CustomButton = styled.button`
    color: palevioletred;
      width: 50px;
    `
    const textLength = (length) => {
        if (!showMore) {
            return props.text.substring(0, 75)
        } else if (showMore && length > 300) {
            return props.text.substring(0, 150)
        } else {
            return props.text
        }
    }
    return (
        <div className="card-hover">
            <h3 className="picture-title">{props.title}</h3>
            <div className="picture-text-div">
                {/*<p className="picture-text">{showMore ? props.text : props.text.substring(0, 75)}</p>*/}
                <p className="picture-text">{textLength(props.text.length)}</p>
                <button className="show-more"
                        onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
                {/*<CustomButton showMore={setShowMore(!showMore)}/>*/}
            </div>
        </div>
    );
};

export default CardHover;