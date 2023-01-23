import React from 'react';
import styled from "styled-components";
import {render} from "react-dom";

const CustomButton = (props) => {

    const CustomButton = styled.button`
        color: red;
    `
    render(
        <CustomButton onClick={props.showMore}/>
    );
};

export default CustomButton;
