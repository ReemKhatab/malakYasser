import React from "react";
import "./Button.css";

function SeatsButton(props){
    const width  = 100 / props.coloums;

    return <button className="seatbtn" style={{backgroundColor : props.booked ? "green" : "red" , flexBasis: `${width}%` }} onClick={() => props.onClick()}>
        {props.text}
    </button>
}
export default SeatsButton;