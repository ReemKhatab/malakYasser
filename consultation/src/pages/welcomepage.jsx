import React from "react";
import "../styles/Welcomepage.css";
import stadium from "../images/stadium.jpg";
import { Link } from "react-router-dom";
import Button from "../componets/Button";
import "../styles/Button.css";

function Welcomepage() {
  return (
    <div className="welcome" style={{ backgroundImage: `url(${stadium})` }}>
      <div className="title">
        <h1 className="heading">Tazkartak</h1>
      </div>
      <div className="contents">
        <div className="buttons">
          <Link to="Login">
            <Button text="Login" class="buttonclass welcomebut " />
          </Link>
          <Link to="Matches">
            <Button text="Matches" class="buttonclass welcomebut" />
          </Link>
          <Link to="signup">
            <Button text="SignUp" class="buttonclass welcomebut" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Welcomepage;
