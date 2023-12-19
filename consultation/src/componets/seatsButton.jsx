import React from "react";
import "../styles/Button.css";
import Button from '@mui/material/Button';
import EventSeatIcon from '@mui/icons-material/EventSeat';

function SeatsButton(props){
    const width  = 100 / props.coloums;

    return <Button className="seatbtn buttonclass buttoncolor" startIcon={<EventSeatIcon style={{ color:  props.booked ? "green" : "purple" ,fontSize: 40  }}/>} style={{backgroundColor :  "transparent" , flexBasis: `${width}%` }} onClick={() => props.onClick()}>
       {props.text}
    </Button>
}
export default SeatsButton;