import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignUp.css";
import "../styles/Button.css";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import NavBar from "../componets/Navbar";
import axios from "axios";
import PopUpTwo from "../componets/PopUpTwo";

function SignUp() {
  const Navigate = useNavigate();
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      let gender;
      if (form[10].checked == true) {
        gender = "0";
      } else if (form[11].checked) {
        gender = "1";
      }
      let role;
      if (form[5].checked == true) {
        role = 3;
      } else if (form[6].checked) {
        role = 2;
      }
      // const values = {
      //   username: form.querySelector("#Username").value,
      //   password: form.querySelector("#Password").value,
      //   firstName: form.querySelector("#FirstName").value,
      //   lastName: form.querySelector("#LastName").value,
      //   email: form.querySelector("#email").value,
      //   birthDate: form.querySelector("#Birthdate").value,
      //   address: form.querySelector("#Address").value,
      //   city: form.querySelector("#City").value,
      //   gender: gender,
      //   role: role,
      // };

      axios
        .post("http://localhost:8808/users", {
          username: form.querySelector("#Username").value,
          password: form.querySelector("#Password").value,
          firstName: form.querySelector("#FirstName").value,
          lastName: form.querySelector("#LastName").value,
          email: form.querySelector("#email").value,
          birthDate: form.querySelector("#Birthdate").value,
          address: form.querySelector("#Address").value,
          city: form.querySelector("#City").value,
          gender: gender,
          role: role,
        })
        .then((response) => {
          console.log("testttt");
          console.log(response.data);
        })
        .catch(function (error) {
          console.error("Error adding stadium:", error);
          setError(error);
          setModalShow(true);
        });
    }
    setValidated(true);
  };

  return (
    <div className="all">
      <NavBar />
      <div className="signupcontainer">
        <div className="signup">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h1 style={{ color: "white", fontWeight: "1000" }}>Sign Up</h1>
            <FormGroup
              className="mb-3 Formclass input-login"
              controlId="Username"
            >
              <FormLabel className="text-left userpad"> Username </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter username"
                name="username"
                required
              />
              <Form.Control.Feedback type="invalid">
                required
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
                name="pass"
                required
              />
              <Form.Control.Feedback type="invalid">
                required
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup
              className="mb-3 Formclass input-login"
              controlId="FirstName"
            >
              <FormLabel className="text-left"> FirstName </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter FirstName"
                name="firstName"
                required
              />
              <Form.Control.Feedback type="invalid">
                required
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup
              className="mb-3 Formclass input-login"
              controlId="LastName"
            >
              <FormLabel className="text-left"> Last Name </FormLabel>
              <FormControl
                type="text"
                placeholder="Last Name"
                name="LastName"
                required
              />
              <Form.Control.Feedback type="invalid">
                required
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login" controlId="email">
              <FormLabel className="text-left"> Email </FormLabel>
              <FormControl
                type="email"
                placeholder="Enter email"
                name="email"
                required
              />
              <Form.Control.Feedback type="invalid">
                required
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup className="mb-3 Formclass ">
              <FormLabel className="text-left"> Role </FormLabel>
              <div className="d-flex">
                <Form.Check
                  inline
                  label="Fan"
                  name="role"
                  type="radio"
                  required
                  className="gender-radio"
                />
                <Form.Check
                  inline
                  label="Manager"
                  name="role"
                  type="radio"
                  required
                  className="gender-radio"
                />
              </div>
              <Form.Control.Feedback type="invalid">
                required
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup
              className="mb-3 Formclass input-login"
              controlId="Birthdate"
            >
              <FormLabel className="text-left"> Birthdate </FormLabel>
              <FormControl
                type="date"
                placeholder="Enter birthdate"
                name="birthdate"
                required
              />
              <Form.Control.Feedback type="invalid">
                required
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup
              className="mb-3 Formclass input-login"
              controlId="Address"
            >
              <FormLabel className="text-left"> Address </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Address"
                name="address"
                required
              />
              <Form.Control.Feedback type="invalid">
                required
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login" controlId="City">
              <FormLabel className="text-left"> City </FormLabel>
              <FormControl
                type="text"
                placeholder="City"
                name="city"
                required
              />
              <Form.Control.Feedback type="invalid">
                required
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup>
              <Form.Check
                inline
                label="Male"
                name="gender"
                type="radio"
                required
                className="gender-radio"
              />
              <Form.Check
                inline
                label="Female"
                name="gender"
                type="radio"
                required
                className="gender-radio"
              />
            </FormGroup>
            <Button className="SubmitLogin" variant="primary" type="submit">
              SignUp
            </Button>
            <div>
              <PopUpTwo
                show={modalShow}
                onHide={() => setModalShow(false)}
                message={
                  error
                    ? "Error adding stadium. change stadium data and try again."
                    : `You just added a new stadium with `
                }
              />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
