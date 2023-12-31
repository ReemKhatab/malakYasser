import Card from "react-bootstrap/Card";
import "../styles/Matches.css";

function ManagerMatchItem({ match }) {
  console.log(match)
  const matchDate = match.matchdate ? match.matchdate.substring(0, 10) : "";
  const matchTime = match.matchtime ? match.matchtime.substring(0, 5) : "";
  return (

    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title text="primary">
          {match.hometeam} vs {match.awayteam}
        </Card.Title>
        <Card.Text className="Venue">{match.stadiumname}</Card.Text>
        <div className="Details">
          <Card.Text>
            {matchDate}
            <span style={{ marginRight: "50px" }}></span>
            {matchTime}
          </Card.Text>
          
          <Card.Text>Vacant Seats : {match.vacantseats}</Card.Text>
          <Card.Text>Reserved Seats : {match.reservedseats}</Card.Text>
          <Card.Text>
            L1: {match.lineman1}
            <span style={{ marginRight: "50px" }}></span>
            L2:{match.lineman2}
          </Card.Text>
          <Card.Text>Refree : {match.refree}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ManagerMatchItem;
