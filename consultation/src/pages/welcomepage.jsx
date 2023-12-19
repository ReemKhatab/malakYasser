import React from "react";
import "../styles/welcomepage.css";
import stadium from "../images/stadium.jpg";
import { Link } from "react-router-dom";
import Button from "../componets/Button";

function Welcomepage() {
  return (
    <div className="welcome" style={{ backgroundImage: `url(${stadium})` }}>
      <div className="title">
        <h1 className="heading">Tazkartak</h1>
      </div>
      <div className="contents">
        <div className="buttons">
          <Link to="login">
            <Button text="Login" className="buttonclass welcomebut " />
          </Link>
          <Link to="homepage">
            <Button text="Matches" className="buttonclass welcomebut" />
          </Link>
          <Link to="signup">
            <Button text="SignUp" className="buttonclass welcomebut" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Welcomepage;
