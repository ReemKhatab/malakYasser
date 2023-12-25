import React from "react";
import "../styles/ReserveTicket.css";
import Button from "@mui/material/Button";
import EventSeatIcon from "@mui/icons-material/EventSeat";

function SeatsButton(props) {
  const width = 100 / props.coloums;
  return (
    <Button
      className="SeatButton"
      startIcon={
        <EventSeatIcon
          style={{
            color: props.booked ? "green" : "hsl(261, 80%, 33%)",
            fontSize: 40,
          }}
        />
      }
      style={{ backgroundColor: "transparent", flexBasis: `${width}%` }}
      onClick={() => props.onClick()}
    >
      {props.text}
    </Button>
  );
}
export default SeatsButton;
