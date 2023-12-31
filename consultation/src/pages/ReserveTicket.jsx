import React from "react";
import "../styles/ReserveTicket.css";
import { StadiumSeats } from "../helpers/stadiumSeats.jsx";
import { useState,useEffect } from "react";
import SeatsButton from "../componets/seatsButton.jsx";
import NavBar from "../componets/Navbar.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { Matches } from "../helpers/Matches.jsx";
import { Form, Button, Modal } from "react-bootstrap";
import ChooseTicket from "../componets/ChooseSeat.jsx";
import Checkout from "../componets/Checkout.jsx";
import axios from "axios";


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
  // const selectedMatch = Matches.find(
  //   (match) => match.id === parseInt(matchId, 10)
    
  // );

  const [matctdetails,setmatchdetails]=useState();
  const [stadiumdetails,setstadiumdetails]=useState();
  const [seatsdetails,setseatsdetails]=useState();
  const [loading,setloadng]=useState(true);


  useEffect(() => {

    // Using Axios to make an asynchronous request
    axios
    .get("http://localhost:8808/seats" , {
      params : {matchid : parseInt(matchId, 10)}})
    .then(function (response) {
      setseatsdetails(response.data);
      
    })

    axios
      .get("http://localhost:8808/match" , {
        params : {matchid : parseInt(matchId, 10)}})
      .then(function (response) {      
        setmatchdetails(response.data);
        axios
        .get("http://localhost:8808/stadium" , {
          params : {stadiumname : response.data.stadiumname}})
          .then(function (response) {
            setstadiumdetails(response.data);
            setloadng(false);
          })
 
      })
     
      .catch(function (error) {
        console.log(error);
      });


},[]
)
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

      {!loading && 
      <div className="Seats">
        {displaySeats && (
          <ChooseTicket
            coloumns={stadiumdetails.columns} // or the appropriate value
            Seats={seatsdetails}
            match={matctdetails}
            onSelectSeats={handleSelectSeats}
            hideSeatsShowCheckout={handleCheckout}
          />
        )}
      </div> }
      {!loading ? <div className="Checkout">
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
        
      </div> : <h1>asda</h1> }
    </div>
  );
}

export default ReserveTicket;
