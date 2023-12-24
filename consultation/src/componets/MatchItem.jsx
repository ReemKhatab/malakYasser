import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/Matches.css";

function MatchItem({ match, showButton, onButtonClick }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title text="primary">
          {match.homeTeam} vs {match.awayTeam}
        </Card.Title>
        <Card.Text className="Venue">{match.matchVenue}</Card.Text>
        <div className="Details">
          <Card.Text>
            {match.date}
            <span style={{ marginRight: "50px" }}></span>
            {match.time}
          </Card.Text>
          <Card.Text>Vacant Seats : {match.vacantSeats}</Card.Text>
          <Card.Text>Reserved Seats : {match.reservedSeats}</Card.Text>
          <Card.Text>
            L1: {match.lineman1}
            <span style={{ marginRight: "50px" }}></span>
            L2:{match.lineman2}
          </Card.Text>
          {showButton && (
            <Link to="/Matches/ReserveTicket">
              <Button
                className="ButtonReserveTicket"
                variant="primary"
                size="lg"
                onClick={onButtonClick}
              >
                Reserve Ticket
              </Button>
            </Link>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default MatchItem;
