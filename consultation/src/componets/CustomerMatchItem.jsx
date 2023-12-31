import Card from "react-bootstrap/Card";
import "../styles/CustomerMatchItem.css";
import { Teams, fetchTeams } from "../helpers/Teams";
import React, { useState, useEffect } from "react";

function CustomerMatchItem({ match }) {
  const [teams, setTeams] = useState(Teams);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetchTeams()
      .then(() => {
        setTeams(Teams);
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
      });
  }, []);

  // const selectedHomeTeam = teams.find(
  //   (team) => team.teamname === match.hometeam
  // );
  // const selectedAwayTeam = teams.find(
  //   (team) => team.teamname === match.awayteam
  // );
  const matchDate = match.matchdate ? match.matchdate.substring(0, 10) : "";
  const matchTime = match.matchtime ? match.matchtime.substring(0, 5) : "";
  console.log("MLAAAKAKK:");
  // console.log("selectedHomeTeam:", selectedHomeTeam);
  // console.log("selectedAwayTeam:", selectedAwayTeam);

  //TODO ADD CLASSES TO CHANGE COLOR OF CARD AND ROUNDED EDGES
  return (
    <>{
      !loading&&
      
      <Card style={{ width: "28rem", margin:"2%" }}>
        <Card.Body>
          <Card.Title text="primary">
            <img
              className="DisplayLogo"
              src={
                window.location.origin +
                teams.find((team) => team.teamname === match.hometeam).logo
              }
              alt={`${
                teams.find((team) => team.teamname === match.hometeam).name
              } Logo`}
            />
            {match.hometeam} vs {match.awayteam}
            <img
              className="DisplayLogo"
              src={
                window.location.origin +
                teams.find((team) => team.teamname === match.awayteam).logo
              }
              alt={`${
                teams.find((team) => team.teamname === match.awayteam).name
              } Logo`}
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
}
    </>
  );
}

export default CustomerMatchItem;
