import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import "../styles/Button.css";
import NavBar from "../componets/Navbar";
import axios from "axios";

import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
} from "react-bootstrap";
let LoggedIn = false;

function Login() {
  const [errorUsernameMessage, setErrorUsernameMessage] = useState(
    "Username must be 5 - 20 characters"
  );
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(
    "Password must be 5 - 20 characters"
  );
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  LoggedIn = localStorage.getItem("isLogged");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    const username = form.querySelector("#Username");
    const password = form.querySelector("#Password");

    if (username.value.length < 5 || username.value.length > 20) {
      username.setCustomValidity("U");
      setErrorUsernameMessage("Username must be 5 - 20 characters");
    } else {
      username.setCustomValidity("");
    }
    if (password.value.length < 8 || password.value.length > 20) {
      password.setCustomValidity("P");
      setErrorPasswordMessage("Password must be 5 - 20 characters");
    } else {
      password.setCustomValidity("");
    }
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      axios
        .get("http://localhost:8808/users", {
          params: values,
        })
        .then(function (response) {
          console.log(response.data["ROLE"]);
          const role = response.data["ROLE"];
          if (role == 1) navigate("/SiteAdministrator");
          if (role == 2) navigate("/EFA/View");
          if (role == 3) navigate("/Matches");
          localStorage.setItem("isLogged", true);
        })
        .catch(function (error) {
          console.log(error);
          username.setCustomValidity("dc");
          password.setCustomValidity("cdc");
          setErrorUsernameMessage("Invalid username or password");
          setErrorPasswordMessage("");
        });
    }
    setValidated(true);
  };

  return (
    <div className="allpage">
      <NavBar />
      <div className="logincontainer">
        <div className="login-box">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FormGroup
              className="mb-3 Formclass input-login"
              controlId="Username"
            >
              <FormLabel className="text-left"> Username </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={handleChange}
                required
                // isInvalid=
              />
              <Form.Control.Feedback type="invalid">
                {errorUsernameMessage}
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup
              className="mb-3 Formclass input-login"
              controlId="Password"
            >
              <FormLabel className="text-left"> Password </FormLabel>
              <FormControl
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errorPasswordMessage}
              </Form.Control.Feedback>
            </FormGroup>

            <Button className="SubmitLogin" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Login;
