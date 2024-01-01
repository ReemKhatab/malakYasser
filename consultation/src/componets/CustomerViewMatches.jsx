import { React, useState, useEffect } from "react";
import CustomerMatchItem from "./CustomerMatchItem";
import { Matches, fetchMatches } from "../helpers/Matches";
import { Col, Row, CardGroup } from "react-bootstrap";
import "../styles/ManagerViewMatches.css";
import { Link } from "react-router-dom";

function CustomerViewMatches() {
  const [matches, setMatches] = useState([]);
  // const [link, setLink] = useState("/Login");
  const log = localStorage.getItem("isLogged");

  useEffect(() => {
    // Fetch matches when the component mounts
    fetchMatches()
      .then(() => {
        console.log(Matches);
        setMatches(Matches);
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
      });
  }, []);

  const CheckUser = (matchid) => {
    var link = "/Login";
    if (log == "true") link = `/Matches/ReserveTicket/${matchid}`;
    return link;
  };
  return (
    <div>
      <CardGroup>
        <Row>
          {matches.map((match, index) => (
            <Col>
              <Link to={CheckUser(match.id)} style={{ textDecoration: "none" }}>
                <CustomerMatchItem match={match} />
              </Link>
            </Col>
          ))}
        </Row>
      </CardGroup>
    </div>
  );
}

export default CustomerViewMatches;
