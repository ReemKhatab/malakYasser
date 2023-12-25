import React from "react";
import "../styles/SignUp.css";
import "../styles/Button.css";
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import NavBar from "../componets/Navbar";
function Edit() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget
        const username = form[0].value
        const password = form[1].value
        const firstName = form[2].value
        const lastName = form[3].value
        const mobile = form[4].value
        const birthDate = form[5].value
        const ID = form[6].value
        const address = form[7].value
        const city = form[8].value
        const job = form[9].value
      }
      const user = {
        username : "mostafaandbadr",
        password : "mostafaandbadr",
        firstName : "mostafaandbadr",
        lastName : "mostafaandbadr",
        mobile : "01005865909",
        ID : "30210282100532",
        date: "3/1/2024",
        address : "mostafaandbadr",
        city : "mostafaandbadr",
        job : "mohandes"
    
      };
      

  return (
    <div className="all">
      <NavBar />
      <div className="signupcontainer">
   
        <div className="signup">
       
          <Form onSubmit={handleSubmit}>
          <h1 style={{color:"white", fontWeight: "1000" }}>Edit Info</h1>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left userpad" > Username </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter username"
                name="username"
                value={user.username}
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left"> Password </FormLabel>
              <FormControl
                type="password"
                placeholder="Enter password"
                name="pass"
                value={user.password}
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > FirstName </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter FirstName"
                name="firstName"
                value={user.firstName}
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Last Name </FormLabel>
              <FormControl
                type="text"
                placeholder="Last Name"
                name="LastName"
                value={user.lastName}
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Mobile number </FormLabel>
              <FormControl
                type='tel'
                placeholder="Mobile"
                name="mobile"
                required
                pattern='[0-9]{11}'
                value={user.mobile}
              />
               </FormGroup>


            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Birthdate </FormLabel>
              <FormControl
                type="date"
                placeholder="Enter birthdate"
                name="birthdate"
                value={new Date(user.date).toISOString().split("T")[0]}
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > National ID </FormLabel>
              <FormControl
                type="tel"
                placeholder="Enter ID"
                name="ID"
                required
                value={user.ID}
                pattern='[0-9]{14}'
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Address </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter Address"
                name="address"
                value={user.address}
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > City </FormLabel>
              <FormControl
                type="text"
                placeholder="City"
                name="city"
                value={user.city}
                required
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Job </FormLabel>
              <FormControl
                type="text"
                placeholder="Job"
                name="job"
                value={user.job}
                required
              />
            </FormGroup>
            <Button className="SubmitLogin" variant="primary" type="submit">
              Edit Info
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Edit;
