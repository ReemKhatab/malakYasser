import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import {
  CardGroup,
  Form,
  FormCheck,
  Card,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import NavBar from "../componets/Navbar";

const Cart = () => {
  const [loading, setloading] = useState(true);
  const [tickets, settickets] = useState([]);
  const [selectedtickets, setselectedtickets] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedID, setselectedID] = useState();

  const handleCheckboxChange = () => {
    console.log("wa7sh");
  };
  const disbaleCancel = (date) => {
    const newdate = new Date()
    const matchdate = new Date(date)
    newdate.setDate(newdate.getDate() + 3)
    if( matchdate >= newdate )
      return false
    return true
  }
  const handleYes = (ticketid) => {
    console.log("ALOOOOOOOO");
    console.log(ticketid);
    settickets(tickets.filter((ticket) => ticket.ticketid !== ticketid))
    setModalShow(false)
    axios
    .post("http://localhost:8808/cancelticket", {
        ticketid: ticketid
    })
    .then((response) => {
        
    })
    .catch(function (error) {
        
    });
  };
  const popup = (ticketid) => {
    console.log("reee");
    setModalShow(true);
    setselectedID(ticketid)
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
                      Kickoff: {ticket.matchtime}
                    </Card.Text>
                    <Card.Text>Ticket ID: {ticket.ticketid}</Card.Text>
                  </div>
                  <Button
                    className="ButtonSubmit"
                    variant="primary"
                    type="submit"
                    onClick={() => {popup(ticket.ticketid)}}
                    hidden={disbaleCancel(ticket.matchdate)}
                  >Cancel </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          ticketid={selectedID}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure you want to cancel?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setModalShow(false)}>
                No
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleYes(selectedID);
                }}
                className="ButtonClose"
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    </div>
  );
};

export default Cart;
