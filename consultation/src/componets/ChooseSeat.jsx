import React, { useState } from "react";
import "../styles/ReserveTicket.css";
import SeatsButton from "../componets/seatsButton.jsx";
import NavBar from "../componets/Navbar.jsx";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

function ChooseTicket({
  coloumns,
  Seats,
  match,
  onSelectSeats,
  hideSeatsShowCheckout,
}) {
  const [seats, setSeats] = useState(Seats);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isselected , setisselected] = useState({});
  

  const handleClick = (id) => {
    // setSeats((prevSeats) => {
    //   const newSeats = prevSeats.map((seat) =>
    //     seat.seatid === id ? { ...seat, reserved: seat.reserved } : seat
    //   );
    //   return newSeats;
    // });

    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(id)) {
        // If the seat is already reserved, remove it from the list
        return prevSelectedSeats.filter((seat) => seat !== id);
      } else {
        // If the seat is not reserved, add it to the list
        return [...prevSelectedSeats, id];
      }
    });
  };
  const handleCheckout = () => {
    onSelectSeats(selectedSeats);
    hideSeatsShowCheckout(true);
  };
  // const selectedMatch = Matches.find(
  //   (match) => match.id === parseInt(matchId, 10)
  // );
  return (
    <>
      <h2>
        {match.hometeam} vs {match.awayteam}
      </h2>
      <div className="matches">
        <div className="MatchDetails">
          <h4>Date: {match.matchdate.split("T")[0]}</h4>
          <h4>Time: {match.matchtime}</h4>
          <h4>Lineman 1: {match.lineman1}</h4>
          <h4>Lineman 2: {match.lineman2}</h4>
        </div>
        <div className="seats-grid">
          {seats.map((item, index) => (
            <SeatsButton
              key={index}
              coloums={coloumns}
              id={item.seatid}
              booked={item.reserved}
              text={item.seatid}
              selected = {selectedSeats}

              onClick={() => {
                handleClick(item.seatid);
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
