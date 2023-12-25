import { React, useState } from "react";
import CustomerMatchItem from "./CustomerMatchItem";
import { Matches } from "../helpers/Matches";
import { Col, Row, CardGroup } from "react-bootstrap";
import "../styles/ManagerViewMatches.css";
import { Link } from "react-router-dom";

function CustomerViewMatches() {
  const [matches, setMatches] = useState(Matches);

  return (
    <div>
      <CardGroup>
        <Row>
          {matches.map((match, index) => (
            <Col>
              <Link
                to={`/Matches/ReserveTicket/${match.id}`}
                style={{ textDecoration: "none" }}
              >
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
