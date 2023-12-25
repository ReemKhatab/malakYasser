import React, { useState } from "react";
import "../styles/ReserveTicket.css";
import SeatsButton from "../componets/seatsButton.jsx";
import NavBar from "../componets/Navbar.jsx";
import { useLocation } from "react-router-dom";
import { Matches } from "../helpers/Matches.jsx";
import Button from "react-bootstrap/Button";
import { StadiumSeats } from "../helpers/stadiumSeats.jsx";

function ChooseTicket({
  coloumns,
  matchId,
  onSelectSeats,
  hideSeatsShowCheckout,
}) {
  const [seats, setSeats] = useState(StadiumSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleClick = (name) => {
    setSeats((prevSeats) => {
      const newSeats = prevSeats.map((seat) =>
        seat.seatName === name ? { ...seat, booked: !seat.booked } : seat
      );
      return newSeats;
    });

    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(name)) {
        // If the seat is already reserved, remove it from the list
        return prevSelectedSeats.filter((seat) => seat !== name);
      } else {
        // If the seat is not reserved, add it to the list
        return [...prevSelectedSeats, name];
      }
    });
  };
  const handleCheckout = () => {
    onSelectSeats(selectedSeats);
    hideSeatsShowCheckout(true);
  };
  const selectedMatch = Matches.find(
    (match) => match.id === parseInt(matchId, 10)
  );
  return (
    <>
      <h2>
        {selectedMatch.homeTeam} vs {selectedMatch.awayTeam}
      </h2>
      <div className="matches">
        <div className="MatchDetails">
          <h4>Date: {selectedMatch.date}</h4>
          <h4>Time: {selectedMatch.time}</h4>
          <h4>Lineman 1: {selectedMatch.lineman1}</h4>
          <h4>Lineman 2: {selectedMatch.lineman2}</h4>
        </div>
        <div className="seats-grid">
          {seats.map((item, index) => (
            <SeatsButton
              key={index}
              coloums={coloumns}
              id={index}
              booked={item.booked}
              text={item.seatName}
              onClick={() => {
                handleClick(item.seatName);
              }}
            />
          ))}
        </div>
      </div>
      <div>
        <h4 className="MatchDetails">
          You reserved: {selectedSeats.length} tickets
        </h4>
      </div>
      <div>
        <Button
          className="ButtonCheckout"
          variant="primary"
          size="lg"
          // Pass the selectedSeats to the handleCheckout function or handle it as needed
          onClick={() => handleCheckout(selectedSeats)}
          disabled={selectedSeats.length === 0}
        >
          Proceed to Checkout
        </Button>
      </div>
    </>
  );
}

export default ChooseTicket;
