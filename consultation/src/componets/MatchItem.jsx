import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MatchItem({ match }) {
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
        </div>
      </Card.Body>
    </Card>
  );
}

export default MatchItem;
