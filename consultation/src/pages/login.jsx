import React from "react";
import { ReactDOM } from "react";
import "./login.css";
import Button from "../componets/Button";
import Inputbox from "../componets/Inputbox";

function Login() {
  return (
    <div className="allpage">
      <div class="login-box">
        <form>
          <Inputbox span="Username" type="text" boxclass="user-box" />
          <Inputbox span="Password" type="password" boxclass="user-box" />
          <center>
            <Button text="Login" class="normalbut" />
          </center>
        </form>
      </div>
    </div>
  );
}
export default Login;
