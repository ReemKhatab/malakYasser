// Checkout.jsx
import { React, useLocation, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import PopUp from "../componets/PopUp.jsx";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Checkout = ({
  matchid,
  match,
  selectedSeats,
  creditCardData,
  handleChange,
  handleSubmit,
  setDisplaySeats,
  setDisplayCheckout,
  modalShow,
  setModalShow,
}) => {
  const [mytickets, setmytickets] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8808/tickets", {
        params: { username: localStorage.getItem("username") },
      })
      .then((response) => {
        console.log(response.data);
        setmytickets(response.data);
      });
  },[]);
  const handleCheckout = (e) => {
    const username = localStorage.getItem("username");
    const ticketscollision = mytickets.filter(
      (ticket) => ((ticket.matchdate == match.matchdate)&&(ticket.id!=match.id))
      );
      if (ticketscollision.length == 0) {
      setModalShow(true);
      axios
        .post("http://localhost:8808/checkout", {
          matchid: parseInt(matchid, 10),
          seats: selectedSeats,
          reserved: 1,
          username: username,
        })
        .then((response) => {
          axios
            .post("http://localhost:8808/reserving", {
              matchid: parseInt(matchid, 10),
              vacantseats: match.vacantseats - selectedSeats.length,
              reservedseats: match.reservedseats + selectedSeats.length,
            })
            .then((response) => {
              console.log("mostafa");
            });
        })
        .catch(function (error) {
          console.error("hadhagaz", error);
          
        });
    }
    else{
      console.log("mahgztsh ")
    }
  };
  const isCreditCardValid = () => {
    const creditCardRegex = /^[0-9]{16}$/;
    return creditCardRegex.test(creditCardData.creditcardNumber);
  };
  const isCVCValid = () => {
    // Regular expression for a 3-digit CVC number
    const cvcRegex = /^[0-9]{3}$/;
    return cvcRegex.test(creditCardData.CVC);
  };
  const isCardHolderNameValid = () => {
    // Check if the card holder name is not empty
    return creditCardData.cardHolderName.trim() !== "";
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div className="MatchDetails">
        <div className="SectionButton">
          <div>
            <h4>
              You have selected {selectedSeats.length} seat(s) of numbers{" "}
              {selectedSeats.join(", ")}
            </h4>
            <h4>Total amount is {selectedSeats.length * 1000}</h4>
          </div>
          <Button
            className="ButtonChangeSeats"
            variant="primary"
            onClick={() => {
              setDisplaySeats(true);
              setDisplayCheckout(false);
            }}
          >
            Change Seats
          </Button>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 Formclass" controlId="formName">
            <Form.Label className="Titles">Card Holder Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Card Holder Name"
              name="cardHolderName"
              value={creditCardData.cardHolderName}
              onChange={handleChange}
              isInvalid={!isCardHolderNameValid()}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter the card holder's name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 Formclass" controlId="creditcardNumber">
            <Form.Label className="Titles">Credit Card Number:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Credit Card Number"
              name="creditcardNumber"
              value={creditCardData.creditcardNumber}
              onChange={handleChange}
              isInvalid={!isCreditCardValid()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid credit card number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 Formclass" controlId="CVC">
            <Form.Label className="Titles">CVC:</Form.Label>
            <Form.Control
              style={{ appearance: "textfield" }}
              type="number"
              placeholder="Enter Your CVC"
              name="CVC"
              value={creditCardData.CVC}
              onChange={handleChange}
              isInvalid={!isCVCValid()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid 3-digit CVC number.
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            className="ButtonSubmit"
            variant="primary"
            type="submit"
            onClick={handleCheckout}
          >
            Checkout
          </Button>
          <div>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
