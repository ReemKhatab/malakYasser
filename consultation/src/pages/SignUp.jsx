import {React , useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignUp.css";
import "../styles/Button.css";
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import NavBar from "../componets/Navbar";
import axios from "axios";

function SignUp() {
  const Navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget
   
    let gender;
    if (form[8].checked == true) {
      gender = "0"
      
    }
    else if (form[9].checked) {
      gender = "1"
      
    }
    const values = { 
     username: form.querySelector("#Username").value,
     password: form.querySelector("#Password").value,
     firstName: form.querySelector("#FirstName").value,
     lastName: form.querySelector("#LastName").value,
     email : form.querySelector("#email").value,
     birthDate: form.querySelector("#Birthdate").value,
     address :form.querySelector("#Address").value,
     city: form.querySelector("#City").value,
     gender : gender

   }

    axios
        .post("http://localhost:8808/users", { 
          username: form.querySelector("#Username").value,
          password: form.querySelector("#Password").value,
          firstName: form.querySelector("#FirstName").value,
          lastName: form.querySelector("#LastName").value,
          email : form.querySelector("#email").value,
          birthDate: form.querySelector("#Birthdate").value,
          address :form.querySelector("#Address").value,
          city: form.querySelector("#City").value,
          gender : gender
     
        })
        .then((response) => {
          console.log("testttt")
          console.log(response.data)
        })
  }

  return (
    <div className="all">
      <NavBar />
      <div className="signupcontainer">
        <div className="signup">
          <Form onSubmit={handleSubmit}>
          <h1 style={{color:"white", fontWeight: "1000" }}>Sign Up</h1>
            <FormGroup className="mb-3 Formclass input-login" controlId="Username">
              <FormLabel className="text-left userpad" > Username </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter username"
                name="username"
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login" controlId="Password">
              <FormLabel className="text-left"> Password </FormLabel>
              <FormControl
                type="password"
                placeholder="Enter password"
                name="pass"
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login" controlId="FirstName">
              <FormLabel className="text-left" > FirstName </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter FirstName"
                name="firstName"
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login" controlId="LastName">
              <FormLabel className="text-left" > Last Name </FormLabel>
              <FormControl
                type="text"
                placeholder="Last Name"
                name="LastName"
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login" controlId="email">
              <FormLabel className="text-left" > Email </FormLabel>
              <FormControl
                type = "email"
                placeholder="Enter email"
                name="email"
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login" controlId="Birthdate">
              <FormLabel className="text-left" > Birthdate </FormLabel>
              <FormControl
                type="date"
                placeholder="Enter birthdate"
                name="birthdate"
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login" controlId="Address">
              <FormLabel className="text-left" > Address </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Address"
                name="address"
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login" controlId="City">
              <FormLabel className="text-left" > City </FormLabel>
              <FormControl
                type="text"
                placeholder="City"
                name="city"
                required
              />
            </FormGroup>

              <Form.Check
                inline
                label="Male"
                name="gender"
                type='radio'
                required
                className="gender-radio"
              />
              <Form.Check
                inline
                label="Female"
                name="gender"
                type='radio'
                required
                className="gender-radio"
              />
            <Button className="SubmitLogin" variant="primary" type="submit" >
              SignUp
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
