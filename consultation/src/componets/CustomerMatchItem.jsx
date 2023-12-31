import Card from "react-bootstrap/Card";
import "../styles/CustomerMatchItem.css";
import { Teams } from "../helpers/Teams";
function CustomerMatchItem({ match }) {
  const selectedHomeTeam = Teams.find(
    (team) => team.teamname === match.hometeam
  );
  const selectedAwayTeam = Teams.find(
    (team) => team.teamname === match.awayteam
  );
  const matchDate = match.matchdate ? match.matchdate.substring(0, 10) : "";
  const matchTime = match.matchtime ? match.matchtime.substring(0, 5) : "";
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
          {match.hometeam} vs {match.awayteam}
          <img
            className="DisplayLogo"
            src={window.location.origin + selectedAwayTeam.logo}
            alt={`${selectedAwayTeam.name} Logo`}
          />
        </Card.Title>
        <Card.Text className="Venue">{match.stadiumname}</Card.Text>
        <div className="Details">
          <Card.Text>
            {matchDate}
            <span style={{ marginRight: "50px" }}></span>
            {matchTime}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CustomerMatchItem;
