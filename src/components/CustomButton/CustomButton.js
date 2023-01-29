import React from 'react';
import "./CustomButton.css"

const CustomButton = props => <a onClick={props.click} className="btn" href="javascript:void(0)"><span>Menu</span><div className="wave"></div>
</a>


export default CustomButton;
