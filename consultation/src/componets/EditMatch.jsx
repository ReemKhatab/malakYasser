import { Form } from "react-bootstrap";
import React, { useState } from "react";
import { Matches } from "../helpers/Matches";
import Button from "react-bootstrap/Button";
import { Stadiums } from "../helpers/Stadiums";
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

function EditMatch() {
  const [matchData, setMatchData] = useState(initialMatchData);
  const [selectedStadium, setSelectedStadium] = useState("");

  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [selectedMatchId, setSelectedMatchId] = useState(0);

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
    <div>
      <div className="container ">
        <div class="row mt-5 mb-5">
          {Matches.map((match, index) => (
            <div class="col-md-3">
              <Button
                className="ButtonEdit"
                variant="primary"
                size="lg"
                onClick={() => {
                  setDisplayEditForm(true);
                  setSelectedMatchId(match.id);
                  setMatchData(match);
                }}
              >
                {match.homeTeam} VS {match.awayTeam}
              </Button>
            </div>
          ))}
        </div>
        {displayEditForm && (
          <Form onSubmit={handleSubmit}  >
            <Form.Group className="mb-3 Formclass" controlId="formHomeTeam">
              <Form.Label class="text-left Titles">Home Team</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Home Team"
                name="homeTeam"
                value={matchData.homeTeam}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 Formclass" controlId="formAwayTeam">
              <Form.Label class="text-left Titles">Away Team</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Away Team"
                name="awayTeam"
                value={matchData.awayTeam}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 Formclass">
              <Form.Label class="text-left Titles">Choose Stadium</Form.Label>
              <Form.Control
                as="select"
                name="matchVenue"
                value={matchData.matchVenue}
                onChange={handleStadiumChange}
              >
                {Stadiums.map((stadium) => (
                  <option key={stadium.id} value={stadium.name}>
                    {stadium.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 Formclass" controlId="formDate">
              <Form.Label class="text-left Titles">Match Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date"
                name="date"
                value={new Date(matchData.date).toISOString().split("T")[0]}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 Formclass" controlId="time">
              <Form.Label class="text-left Titles">Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter Time"
                name="time"
                value={matchData.time}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 Formclass" controlId="lineman1">
              <Form.Label class="text-left Titles">Lineman 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Lineman 1"
                name="lineman1"
                value={matchData.lineman1}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 Formclass" controlId="lineman2">
              <Form.Label class="text-left Titles">Lineman 2</Form.Label>
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
        )}
      </div>
    </div>
  );
}

export default EditMatch;
