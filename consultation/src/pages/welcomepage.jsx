import React from "react";
import "../styles/Welcomepage.css";
import stadium from "../images/stadium.jpg";
import { Link } from "react-router-dom";
import Button from "../componets/Button";
import "../styles/Button.css";


function Welcomepage() {
  const Logged = localStorage.getItem("isLogged")

  const toggle = () => {
    localStorage.setItem("isLogged" , false)
  }

  return (
    <div className="welcome" style={{ backgroundImage: `url(${stadium})` }}>
      <div className="title">
        <h1 className="heading">Tazkartak</h1>
      </div>
      <div className="contents">
        <div className="buttons">
          {(Logged === "false") ? <Link to="Login">
            <Button text="Login" class="buttonclass welcomebut " />
          </Link> : <Link to="Login" onClick={toggle}>
            <Button text="Logout" class="buttonclass welcomebut" />
          </Link>}
          <Link to="Matches">
            <Button text="Matches" class="buttonclass welcomebut" />
          </Link>
          {(Logged === "false") ? <Link to="Signup">
            <Button text="SignUp" class="buttonclass welcomebut " />
          </Link> : <Link to="Edituser">
            <Button text="Edit" class="buttonclass welcomebut" />
          </Link>}
        </div>
      </div>
    </div>
  );
}
export default Welcomepage;
