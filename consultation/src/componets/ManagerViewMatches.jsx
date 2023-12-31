import { React, useState ,useEffect} from "react";
import ManagerMatchItem from "./ManagerMatchItem";
import { Matches ,fetchMatches } from "../helpers/Matches";
import { Col, Row, CardGroup } from "react-bootstrap";
import "../styles/ManagerViewMatches.css";


function ManagerViewMatches() {
  const [matches, setMatches] = useState([]);

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
