import Card from "react-bootstrap/Card";
import "../styles/CustomerMatchItem.css";
import { Teams } from "../helpers/Teams";
function CustomerMatchItem({ match }) {
  const selectedHomeTeam = Teams.find(
    (team) => team.teamname === match.homeTeam
  );
  const selectedAwayTeam = Teams.find(
    (team) => team.teamname === match.awayTeam
  );

  console.log("MLAAAKAKK:");
  console.log("selectedHomeTeam:", selectedHomeTeam);
  console.log("selectedAwayTeam:", selectedAwayTeam);

  //TODO ADD CLASSES TO CHANGE COLOR OF CARD AND ROUNDED EDGES
  return (
    <Card style={{ width: "27rem" }}>
      <Card.Body>
        <Card.Title text="primary">
          <img
            className="DisplayLogo"
            src={window.location.origin + selectedHomeTeam.logo}
            alt={`${selectedHomeTeam.name} Logo`}
          />
          {match.homeTeam} vs {match.awayTeam}
          <img
            className="DisplayLogo"
            src={window.location.origin + selectedAwayTeam.logo}
            alt={`${selectedAwayTeam.name} Logo`}
          />
        </Card.Title>
        <Card.Text className="Venue">{match.matchVenue}</Card.Text>
        <div className="Details">
          <Card.Text>
            {match.date}
            <span style={{ marginRight: "50px" }}></span>
            {match.time}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomerMatchItem;
