import React from "react";
import "../styles/Login.css";
import "../styles/Button.css";
import Button from "../componets/Button";
import Inputbox from "../componets/Inputbox";
import NavBar from "../componets/Navbar";
function Login() {
  return (
    <div className="allpage">
      <NavBar />
      <div className="logincontainer">
        <div className="login-box">
          <form>
            <Inputbox span="Username" type="text" boxclass="user-box" />
            <Inputbox span="Password" type="password" boxclass="user-box" />
            <center>
              <Button text="Login" class="normalbut buttonclass" />
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
