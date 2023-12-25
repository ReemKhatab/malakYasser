import React from "react";
import "../styles/Login.css";
import "../styles/Button.css";
import NavBar from "../componets/Navbar";
import { Form, FormControl, FormGroup, FormLabel , Button } from "react-bootstrap";

function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.currentTarget[0].value
    const pass = e.currentTarget[1].value
    console.log(username , pass)
  }

  return (
    <div className="allpage">
      <NavBar />
      <div className="logincontainer">
        <div className="login-box">
          <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Username </FormLabel>
              <FormControl
                  type ="text"
                  placeholder="Enter username"
                  name="username" 
                  required
                />
                
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left"> Password </FormLabel>
              <FormControl
                  type ="password"
                  placeholder="Enter password"
                  name="pass" 
                  required
                />
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
