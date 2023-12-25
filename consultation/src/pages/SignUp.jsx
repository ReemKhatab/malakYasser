import React from "react";
import "../styles/SignUp.css";
import "../styles/Button.css";
import { Form , FormGroup , FormControl , FormLabel , Button } from "react-bootstrap";
import NavBar from "../componets/Navbar";
function SignUp() {


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget
    const username =  form[0].value
    const password =  form[1].value
    const firstName =  form[2].value
    const lastName =  form[3].value
    const birthDate =  form[4].value
    const ID =  form[5].value
    const address =  form[6].value
    const city =  form[7].value
    const job =  form[8].value
  }

  return (
    <div className="all">
      <NavBar />
      <div className="signupcontainer">
        <div className="signup">
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left userpad" > Username </FormLabel>
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
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > FirstName </FormLabel>
              <FormControl
                  type ="text"
                  placeholder="Enter FirstName"
                  name="firstName" 
                  required
                />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Last Name </FormLabel>
              <FormControl
                  type = "text"
                  placeholder="Last Name"
                  name="LastName" 
                  required
                />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Birthdate </FormLabel>
              <FormControl
                  type = "date"
                  placeholder="Enter birthdate"
                  name="birthdate" 
                  required
                />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > National ID </FormLabel>
              <FormControl
                  type = "numbers"
                  placeholder="Enter ID"
                  name="ID" 
                  required
                />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Address </FormLabel>
              <FormControl
                  type = "text"
                  placeholder="Enter Address"
                  name="address" 
                  required
                />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > City </FormLabel>
              <FormControl
                  type = "text"
                  placeholder="City"
                  name="city" 
                  required
                />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Job </FormLabel>
              <FormControl
                  type = "text"
                  placeholder="Job"
                  name="job" 
                  required
                />
            </FormGroup>

            <Button className="SubmitLogin" variant="primary" type="submit">
              SignUp
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
