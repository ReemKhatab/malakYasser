import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Stadiums } from "../helpers/Stadiums";
import { Teams } from "../helpers/Teams";

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
        <Form.Group className="mb-3 Formclass" controlId="formHomeTeam">
          <Form.Label className="Titles">Home Team</Form.Label>
          <Form.Select
            name="homeTeam"
            value={matchData.homeTeam}
            onChange={handleChange}
          >
            <option disabled={true} value="">
              --Choose home team--
            </option>
            {Teams.map((team, index) => (
              <option key={index} value={team.teamname}>
                {team.teamname}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="formAwayTeam">
          <Form.Label className="Titles">Away Team</Form.Label>
          <Form.Select
            name="awayTeam"
            value={matchData.awayTeam}
            onChange={handleChange}
          >
            <option disabled={true} value="">
              --Choose away team--
            </option>
            {Teams.map((team, index) => (
              <option key={index} value={team.teamname}>
                {team.teamname}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="formStadium">
          <Form.Label className="Titles">Choose Stadium</Form.Label>
          <Form.Select
            name="matchVenue"
            value={matchData.matchVenue}
            onChange={handleChange}
          >
            <option disabled={true} value="">
              --Choose a stadium--
            </option>
            {Stadiums.map((stadium) => (
              <option key={stadium.id} value={stadium.name}>
                {stadium.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="formDate">
          <Form.Label className="Titles">Match Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            name="date"
            value={matchData.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="time">
          <Form.Label className="Titles">Time</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter Time"
            name="time"
            value={matchData.time}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="lineman1">
          <Form.Label className="Titles">Lineman 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Lineman 1"
            name="lineman1"
            value={matchData.lineman1}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="lineman2">
          <Form.Label className="Titles">Lineman 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Lineman 2"
            name="lineman2"
            value={matchData.lineman2}
            onChange={handleChange}
          />
        </Form.Group>
        <Button className="ButtonSubmit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateNewMatch;
