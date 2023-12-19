import React from "react";
import "../styles/Homepage.css";
import { componentArray } from "../helpers/stadiumSeats.jsx";
import { useState } from "react";
import SeatsButton from "../componets/seatsButton.jsx";
import NavBar from "../componets/Navbar";

function Homepage() {
  const [seats, setSeats] = useState(componentArray);
  const handleClick = (name) => {
    setSeats((prevprops) => {
      const newSeats = prevprops.map((seat) =>
        seat.seatName === name ? { ...seat, booked: !seat.booked } : seat
      );
      return newSeats;
    });
  };

  const coloumns = 4;

  console.log(seats);
  return (
    <>
    <NavBar />
    <div className="matchcont">
      </div>
    <div className="matches">
      <div className="seats-grid">
        {seats.map((item, index) => {
          return (
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
          );
        })}
      </div>
      </div>
    </>
  );
}
export default Homepage;
