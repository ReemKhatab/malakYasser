// Checkout.jsx
import React from "react";
import { Button, Form } from "react-bootstrap";
import PopUp from "../componets/PopUp.jsx";

const Checkout = ({
  selectedSeats,
  creditCardData,
  handleChange,
  handleSubmit,
  setDisplaySeats,
  setDisplayCheckout,
  modalShow,
  setModalShow,
}) => {
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
            />
          </Form.Group>

          <Form.Group className="mb-3 Formclass" controlId="creditcardNumber">
            <Form.Label className="Titles">Credit Card Number:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Credit Card Number"
              name="creditcardNumber"
              value={creditCardData.creditcardNumber}
              onChange={handleChange}
            />
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
            />
          </Form.Group>
          <Button
            className="ButtonSubmit"
            variant="primary"
            type="submit"
            onClick={() => setModalShow(true)}
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
