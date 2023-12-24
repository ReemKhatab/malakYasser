import React from "react";
import { useState } from "react";
import MatchItem from "./MatchItem";
import { Matches } from "../helpers/Matches";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import "../styles/ViewMatches.css";

function ViewMatches({ showButton, onButtonClick }) {
  const [matches, setMatches] = useState(Matches);
  return (
    <div>
      <CardGroup>
        <Row>
          {matches.map((match, index) => (
            <Col>
              <MatchItem
                match={match}
                showButton={showButton}
                onButtonClick={onButtonClick}
              />
            </Col>
          ))}
        </Row>
      </CardGroup>
    </div>
  );
}

export default ViewMatches;
