import { React, useState } from "react";
import ManagerMatchItem from "./ManagerMatchItem";
import { Matches } from "../helpers/Matches";
import { Col, Row, CardGroup } from "react-bootstrap";
import "../styles/ManagerViewMatches.css";
import { Link } from "react-router-dom";

function ManagerViewMatches() {
  const [matches, setMatches] = useState(Matches);
  return (
    <div>
      <CardGroup>
        <Row>
          {matches.map((match, index) => (
            <Col>
              <ManagerMatchItem match={match} />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </div>
  );
}

export default ManagerViewMatches;
