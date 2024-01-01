import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Stadiums, fetchStadiums } from "../helpers/Stadiums";
import { Teams, fetchTeams } from "../helpers/Teams";
import axios from "axios";
import PopUpThree from "./PopUpThree";

const initialMatchData = {
  hometeam: "",
  awayteam: "",
  matchdate: "",
  matchtime: "",
  stadiumname: "",
  refree: "",
  lineman1: "",
  lineman2: "",
  totalcapacity: "",
  vacantseats: "",
  reservedseats: "",
};

function CreateNewMatch() {
  const [matchData, setMatchData] = useState(initialMatchData);
  const [teams, setTeams] = useState(Teams);
  const [stadiums, setStadiums] = useState(Stadiums);
  const [validated, setValidated] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const minDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split("T")[0];
    return tomorrowFormatted;
  };

  useEffect(() => {
    fetchTeams()
      .then(() => {
        setTeams(Teams);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
      });
    fetchStadiums()
      .then(() => {
        setStadiums(Stadiums);
      })
      .catch((error) => {
        console.error("Error fetching stadiums:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMatchData({
      ...matchData,
      [name]: value,
    });

    if (
      (name === "awayteam" && value === matchData.hometeam) ||
      (name === "hometeam" && value === matchData.awayteam)
    ) {
      seterrorMsg("Cannot choose the same team for home and away");
    } else {
      seterrorMsg("");
    }
  };

  const addSeatsToDB = (matchid,totalcapacity) => {
    for (let i = 1; i <= totalcapacity; i++) {
      axios
        .post("http://localhost:8808/EFA_manager/create_new_match/add_seat", {
          matchid: matchid,
          seatid: i,
        })
        .then((response) => {
          console.log("sahhhh");
          console.log(response);
        })
        .catch(function (error) {
          console.log("ghalaaat");
          console.log(error);
        });
    }
  };

  const addMatchToDB = () => {
    //insert match in db
    axios
      .post(
        "http://localhost:8808/EFA_manager/create_new_match/submit_match",
        matchData
      )
      .then((response) => {
        console.log("sahhhh");
        console.log(response);
        setValidated(true);
        seterrorMsg("");
        const insertedId = response.data.insertedId;
        console.log("Inserted ID in React.js:", insertedId);

        //add to seats table
        addSeatsToDB(insertedId,matchData.totalcapacity);
      })
      .catch(function (error) {
        setValidated(false);
        seterrorMsg("Error Duplicated Match");
        console.log("ghalaaat");
        setModalShow(true);
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      e.preventDefault();
      e.stopPropagation();
      console.log(matchData);
      //get capacity
      axios
        .get(
          "http://localhost:8808/EFA_manager/create_new_match/get_stadiums_capacity",
          {
            params: {
              stadiumname: matchData.stadiumname,
            },
          }
        )
        .then(function (response) {
          matchData.totalcapacity = response.data["numberofseats"];
          matchData.vacantseats = response.data["numberofseats"];
          matchData.reservedseats = 0;
          console.log("Capacityy", matchData.totalcapacity);
          addMatchToDB();
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // setValidated(true);
    // e.preventDefault();
    // console.log("Submitted:", matchData);
  };

  return (
    <div className="container">
      <h2>Create New Match</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3 Formclass" controlId="formHomeTeam">
          <Form.Label className="Titles">Home Team</Form.Label>
          <Form.Select
            name="hometeam"
            value={matchData.hometeam}
            onChange={handleChange}
            required
          >
            <option disabled={true} value="">
              --Choose home team--
            </option>
            {teams.map((team, index) => (
              <option key={index} value={team.teamname}>
                {team.teamname}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="formAwayTeam">
          <Form.Label className="Titles">Away Team</Form.Label>
          <Form.Select
            name="awayteam"
            value={matchData.awayteam}
            onChange={handleChange}
            required
          >
            <option disabled={true} value="">
              --Choose away team--
            </option>
            {teams.map((team, index) => (
              <option key={index} value={team.teamname}>
                {team.teamname}
              </option>
            ))}
          </Form.Select>
          {errorMsg && <p style={{ color: "crimson" }}>{errorMsg}</p>}
        </Form.Group>

        <PopUpThree show={modalShow} onHide={() => setModalShow(false)} />

        <Form.Group className="mb-3 Formclass" controlId="formStadium">
          <Form.Label className="Titles">Choose Stadium</Form.Label>
          <Form.Select
            name="stadiumname"
            value={matchData.stadiumname}
            onChange={handleChange}
            required
          >
            <option disabled={true} value="">
              --Choose a stadium--
            </option>
            {stadiums.map((stadium, index) => (
              <option key={index} value={stadium.stadiumname}>
                {stadium.stadiumname}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="formDate">
          <Form.Label className="Titles">Match Date</Form.Label>
          <Form.Control
            type="date"
            min={minDate()}
            placeholder="Enter date"
            name="matchdate"
            value={matchData.matchdate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="time">
          <Form.Label className="Titles">Time</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter Time"
            min="06:00:00"
            max="22:00:00"
            name="matchtime"
            value={matchData.matchtime}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a time between 6:00 AM and 10:00 PM
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="refree">
          <Form.Label className="Titles">Refree</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Refree Name"
            name="refree"
            value={matchData.refree}
            onChange={handleChange}
            required
            minLength={5}
            maxLength={20}
          />
          <Form.Control.Feedback type="invalid">
            Refree name must be 5 - 20 characters
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="lineman1">
          <Form.Label className="Titles">Lineman 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Lineman 1 Name"
            name="lineman1"
            value={matchData.lineman1}
            onChange={handleChange}
            required
            minLength={5}
            maxLength={20}
          />
          <Form.Control.Feedback type="invalid">
            Lineman name must be 5 - 20 characters
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 Formclass" controlId="lineman2">
          <Form.Label className="Titles">Lineman 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Lineman 2 Name"
            name="lineman2"
            value={matchData.lineman2}
            onChange={handleChange}
            minLength={5}
            maxLength={20}
            required
          />
          <Form.Control.Feedback type="invalid">
            Lineman name must be 5 - 20 characters
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="ButtonSubmit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateNewMatch;
