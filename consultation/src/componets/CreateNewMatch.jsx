import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {Stadiums} from "../helpers/Stadiums"

const initialMatchData = {
  id: 0,
  homeTeam: "",
  awayTeam: "",
  matchVenue: "",
  date: "",
  time: "",
  lineman1: "",
  lineman2: "", 
  //handle when saving in database that reserved seats=0 and vacant seats=no of stadium seats
};

function CreateNewMatch() {
  const [matchData, setMatchData] = useState(initialMatchData);
  const [selectedStadium, setSelectedStadium] = useState("");

  const handleStadiumChange = (e) => {
    setSelectedStadium(e.target.value);
    const { name, value } = e.target;
    setMatchData({
      ...matchData,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMatchData({
      ...matchData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", matchData);
  };

  return (
    <div className="container">
      <h2>Create New Match</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formHomeTeam">
          <Form.Label class="text-left">Home Team</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Home Team"
            name="homeTeam"
            value={matchData.homeTeam}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAwayTeam">
          <Form.Label class="text-left">Away Team</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Away Team"
            name="awayTeam"
            value={matchData.awayTeam}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Choose Stadium</Form.Label>
          <Form.Control
            as="select"
            name="matchVenue"
            value={selectedStadium}
            onChange={handleStadiumChange}
          >
            {Stadiums.map((stadium) => (
              <option key={stadium.id} value={stadium.name}>
                {stadium.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label class="text-left">Match Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            name="date"
            value={matchData.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="time">
          <Form.Label class="text-left">Time</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter Time"
            name="time"
            value={matchData.time}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lineman1">
          <Form.Label class="text-left">Lineman 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Lineman 1"
            name="lineman1"
            value={matchData.lineman1}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lineman2">
          <Form.Label class="text-left">Lineman 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Lineman 2"
            name="lineman2"
            value={matchData.lineman2}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateNewMatch;