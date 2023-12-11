import React from "react";

function MatchItem({ match }) {
  return (
    <div class="container">
      <div className="row">
        <div class="col-sm">
          <h3>{match.homeTeam}</h3>
        </div>
        <div class="col-sm">
          <h3>{match.awayTeam}</h3>
        </div>
        <div class="col-sm">
          <h3>{match.matchVenue}</h3>
        </div>
        <div class="col-sm">
          <h3>{match.date}</h3>
        </div>
        <div class="col-sm">
          <h3>{match.time}</h3>
        </div>
        <div class="col-sm">
          <h3>{match.lineman1}</h3>
        </div>
        <div class="col-sm">
          <h3>{match.lineman2}</h3>
        </div>
        <div class="col-sm">
          <h3>{match.vacantSeats}</h3>
        </div>
        <div class="col-sm">
          <h3>{match.reservedSeats}</h3>
        </div>
      </div>
    </div>
  );
}

export default MatchItem;
