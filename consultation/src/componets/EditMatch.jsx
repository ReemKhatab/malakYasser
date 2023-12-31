import { Form } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { Matches, fetchMatches } from "../helpers/Matches";
import { Stadiums, fetchStadiums } from "../helpers/Stadiums";
import { Teams, fetchTeams } from "../helpers/Teams";
import Button from "react-bootstrap/Button";
import axios from "axios";
import PopUpTwo from "./PopUpTwo";

const initialMatchData = {
  id: "",
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

function EditMatch() {
  const ref = useRef(null);
  const [matchData, setMatchData] = useState(initialMatchData);
  const [oldStadium, setOldStadium] = useState("");

  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [selectedMatchId, setSelectedMatchId] = useState(0);

  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState(Teams);
  const [stadiums, setStadiums] = useState(Stadiums);

  const [validated, setValidated] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [errorPopUp, setErrorPopUp] = useState(null);

  const minDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split("T")[0];
    return tomorrowFormatted;
  };

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

  const updateMatchInDb = () => {
    const matchd = new Date(matchData.matchdate);
    matchData.matchdate = matchd.toISOString().split("T")[0];
    axios
      .put("http://localhost:8808/EFA_manager/edit_match", matchData)
      .then(function (response) {
        console.log("RESPONSE UPDATE", response);
        setValidated(true);
        seterrorMsg("");
        setErrorPopUp("");
        setModalShow(true);
        deletOldSeatsFromDB();
        addSeatsToDB(matchData.id, matchData.totalcapacity);
      })
      .catch(function (error) {
        setValidated(false);
        seterrorMsg("Error Duplicated Match");
        setErrorPopUp(error);
        setModalShow(true);
        console.log("ghalaaat");
        console.log(error);
      });
  };

  const updateMatchInDbWithoutStadium = () => {
    const matchd = new Date(matchData.matchdate);
    matchData.matchdate = matchd.toISOString().split("T")[0];
    axios
      .put(
        "http://localhost:8808/EFA_manager/edit_match_without_stadium",
        matchData
      )
      .then(function (response) {
        console.log("RESPONSE UPDATE WITHOUT STAD", response);
        setValidated(true);
        seterrorMsg("");
        setErrorPopUp("");
        setModalShow(true);
      })
      .catch(function (error) {
        setValidated(false);
        setErrorPopUp(error);
        seterrorMsg("Error Duplicated Match");
        setModalShow(true);
        console.log("ghalaaat");
        console.log(error);
      });
  };

  const getCapacityFromDb = () => {
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
        //add match to db
        updateMatchInDb();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //function calllllllllllll  addSeatsToDB(insertedId,matchData.totalcapacity);
  const addSeatsToDB = (matchid, totalcapacity) => {
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

  const deletOldSeatsFromDB = () => {
    axios
      .delete("http://localhost:8808/EFA_manager/edit_match_delete_seats", {
        data: { matchid: matchData.id },
      })
      .then((response) => {
        console.log("sahhhh");
        console.log(response);
      })
      .catch(function (error) {
        console.log("ghalaaat");
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
      // console.log(matchData);
      //queries
      console.log("old stadd ", oldStadium);
      console.log("current stadd ", matchData.stadiumname);
      if (oldStadium == matchData.stadiumname) {
        console.log("They are the same ");
        updateMatchInDbWithoutStadium();
      } else {
        console.log("They are NOTTTT the same ");
        getCapacityFromDb();
      }
      //if matchData.stadium name != old stadium
      //yb2a e3ml update aady le kolo w dalet el reservations el adeema [ab3tlha matchid] w e3ml insert le kol el seats vacant
      //else if matchData.stadium name == old stadium
      //e3ml update le kol haga gher el stad fa hanady func update_without_stad
    }
  };
  useEffect(() => {
    // Fetch matches when the component mounts
    fetchMatches()
      .then(() => {
        console.log(Matches);
        setMatches(Matches);
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
      });

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

  return (
    <div>
      <div className="container ">
        <h2>Edit Matches</h2>
        <div className="row mt-5 mb-5">
          {matches.map((match, index) => (
            <div className="col-md-4" key={index}>
              <Button
                className="ButtonEdit"
                variant="primary"
                size="lg"
                onClick={() => {
                  setDisplayEditForm(true);
                  setSelectedMatchId(match.id);
                  matchData.id = match.id;
                  setOldStadium(match.stadiumname);
                  console.log("OLD STADIUMM", match.stadiumname);
                  setMatchData(match);
                  // console.log("DATEEE", match.matchdate)
                  ref.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div>
                  {match.hometeam} VS {match.awayteam}
                </div>
                <div>{match.matchdate.substring(0, 10)}</div>
              </Button>
            </div>
          ))}
        </div>
        {displayEditForm && (
          <Form
            ref={ref}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
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

            <PopUpTwo
              show={modalShow}
              onHide={() => setModalShow(false)}
              message={
                errorPopUp
                  ? "Error editing match. Change match data and try again."
                  : "Match is edited successfully"
              }
            />
            <Form.Group className="mb-3 Formclass" controlId="formStadium">
              <Form.Label className="Titles">Stadium</Form.Label>
              <Form.Select
                name="stadiumname"
                value={matchData.stadiumname}
                onChange={handleChange}
                required
                // disabled={true}
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
                value={
                  new Date(matchData.matchdate).toISOString().split("T")[0]
                }
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
                pattern="^[A-Za-z]+$"
                minLength={3}
                maxLength={20}
              />
              <Form.Control.Feedback type="invalid">
                Refree name must be 3 - 20 characters
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
                pattern="^[A-Za-z]+$"
                required
                minLength={3}
                maxLength={20}
              />
              <Form.Control.Feedback type="invalid">
                Lineman name must be 3 - 20 characters
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
                pattern="^[A-Za-z]+$"
                minLength={3}
                maxLength={20}
                required
              />
              <Form.Control.Feedback type="invalid">
                Lineman name must be 3 - 20 characters
              </Form.Control.Feedback>
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
