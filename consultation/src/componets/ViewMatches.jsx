import React from "react";
import { useState } from "react";
import MatchItem from "./MatchItem";
import { Matches } from "../helpers/Matches";

function ViewMatches() {
  const [matches, setMatches] = useState(Matches);
  return (
    <div>
      <div class="container">
        <div className="row">
          <div class="col-sm">
            <h2>Team 1</h2>
          </div>
          <div class="col-sm">
            <h2>Team 2</h2>
          </div>
          <div class="col-sm">
            <h2>Match Venue</h2>
          </div>
          <div class="col-sm">
            <h2>Date</h2>
          </div>
          <div class="col-sm">
            <h2>Time</h2>
          </div>
          <div class="col-sm">
            <h2>Lineman 1</h2>
          </div>
          <div class="col-sm">
            <h2>Lineman 2</h2>
          </div>
          <div class="col-sm">
            <h2>Vacant Seats</h2>
          </div>
          <div class="col-sm">
            <h2>Reserved Seats</h2>
          </div>
        </div>
        {matches.map((match, index) => (
          <MatchItem match={match} />
        ))}
      </div>
    </div>
  );
}

export default ViewMatches;
