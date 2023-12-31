import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { CardGroup, Form, FormCheck, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import NavBar from "../componets/Navbar";

const Cart = () => {
  const [loading, setloading] = useState(true);
  const [tickets, settickets] = useState([]);
  const [selectedtickets, setselectedtickets] = useState([]);

  const handleCheckboxChange = () => {
    console.log("wa7sh");
  };
  const handleCancel = (ticketid) => {
    console.log("ALOOOOOOOO");
    console.log(ticketid);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8808/tickets", {
        params: { username: localStorage.getItem("username") },
      })
      .then((response) => {
        console.log(response.data);
        settickets(response.data);
        setloading(false);
      });
  }, []);

  return (
    <div className="tickets background">
      <NavBar />
      <h2> Your Tickets</h2>
      <Row>
        {!loading &&
          tickets.map((ticket) => (
            <Col>
              <Card style={{ width: "50rem", margin: "2%" }}>
                <Card.Body class="ticketcolor">
                  <Card.Title text="primary">
                    {ticket.hometeam} vs {ticket.awayteam}
                  </Card.Title>
                  <div className="Details">
                    <Card.Text>Seat no.: {ticket.seatid}</Card.Text>
                    <Card.Text>
                      Date: {ticket.matchdate.split("T")[0]}
                    </Card.Text>
                    <Card.Text>
                      Kickoff: {ticket.matchtime.split(":")}
                    </Card.Text>
                    <Card.Text>Ticket ID: {ticket.ticketid}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Cart;
