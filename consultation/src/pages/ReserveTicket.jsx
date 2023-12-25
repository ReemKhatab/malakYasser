import React from "react";
import "../styles/ReserveTicket.css";
import { StadiumSeats } from "../helpers/stadiumSeats.jsx";
import { useState } from "react";
import SeatsButton from "../componets/seatsButton.jsx";
import NavBar from "../componets/Navbar.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { Matches } from "../helpers/Matches.jsx";
import { Form, Button, Modal } from "react-bootstrap";
import ChooseTicket from "../componets/ChooseSeat.jsx";
import Checkout from "../componets/Checkout.jsx";

const initialCreditCardData = {
  cardHolderName: "",
  creditcardNumber: "",
  CVC: "",
};

function ReserveTicket() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [creditCardData, setCreditCardData] = useState(initialCreditCardData);

  const [displaySeats, setDisplaySeats] = useState(true);
  const [displayCheckout, setDisplayCheckout] = useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  const location = useLocation();
  const matchId = location.pathname.split("/")[3];
  const selectedMatch = Matches.find(
    (match) => match.id === parseInt(matchId, 10)
  );
  //Seats
  const handleSelectSeats = (seats) => {
    console.log("Selected Seats:", seats);
    setSelectedSeats(seats);
  };

  const handleCheckout = () => {
    setDisplaySeats(false);
    setDisplayCheckout(true);
  };

  //Checkout
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreditCardData({
      ...creditCardData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", creditCardData);
  };

  return (
    <div className="ReserveTicket">
      <NavBar />
      <div className="Seats">
        {displaySeats && (
          <ChooseTicket
            coloumns={5} // or the appropriate value
            matchId={matchId}
            onSelectSeats={handleSelectSeats}
            hideSeatsShowCheckout={handleCheckout}
          />
        )}
      </div>
      <div className="Checkout">
        {displayCheckout && (
          <Checkout
            selectedSeats={selectedSeats}
            creditCardData={creditCardData}
            modalShow={modalShow}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setDisplaySeats={setDisplaySeats}
            setDisplayCheckout={setDisplayCheckout}
            setModalShow={setModalShow}
          />
        )}
      </div>
    </div>
  );
}

export default ReserveTicket;
