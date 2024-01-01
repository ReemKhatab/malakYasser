// Checkout.jsx
import { React, useLocation } from "react";
import { Button, Form } from "react-bootstrap";
import PopUp from "../componets/PopUp.jsx";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Checkout = ({
  matchid,
  selectedSeats,
  creditCardData,
  handleChange,
  handleSubmit,
  setDisplaySeats,
  setDisplayCheckout,
  modalShow,
  setModalShow,
}) => {
  const handleCheckout = (e) => {
    setModalShow(true);
    const username = localStorage.getItem("username");
    selectedSeats.map((seat) => {
      axios.post("http://localhost:8808/checkout", {
        matchid: parseInt(matchid, 10),
        seatid: seat,
        reserved: 1,
        username: username,
      });
    });
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
