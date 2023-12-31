import {React , useEffect, useState} from "react";
import "../styles/ReserveTicket.css";
import Button from "@mui/material/Button";
import EventSeatIcon from "@mui/icons-material/EventSeat";

function SeatsButton(props) {
  const width = 100 / props.coloums;
  const [styles , setStyles] = useState({color : "hsl(261, 80%, 33%)" , fontSize: 40})
  useEffect(() => {
    if(props.booked)
    {
      setStyles({...styles , color : "red"})
    }
  }, [])

  const handleClick = () => {
    props.onClick()
    setStyles({...styles , color: (styles.color == "green") ? "hsl(261, 80%, 33%)" : "green"})
  }

  return (
    <Button
      className="SeatButton"
      startIcon={
        <EventSeatIcon
          style={styles}
        />
      }
      style={{ backgroundColor: "transparent", flexBasis: `${width}%` }}
      onClick={handleClick}
      disabled = {props.booked ? true : false}
    >
      {props.text}
    </Button>
  );
}
export default SeatsButton;
