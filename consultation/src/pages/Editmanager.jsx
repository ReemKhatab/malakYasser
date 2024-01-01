import React, { useEffect, useState } from "react";
import "../styles/SignUp.css";
import "../styles/Button.css";
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import axios from "axios";
import EFAManagerNavBar from "../componets/EFAManagerNavBar";
function Editmanager() {
  const [user , setUser] = useState({})
  const [loading, setLoading] = useState(true);
  useEffect(() => {

        // Using Axios to make an asynchronous request
        axios
          .get("http://localhost:8808/edit" , {
            params : {username : localStorage.getItem("username")}})
          .then(function (response) {
            console.log(response.data);
            setUser(response.data);
            setLoading(false)
          })
          .catch(function (error) {
            console.log(error);
          });

    
  },[]
  )
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget
        const values = {
          username: localStorage.getItem("username"),
          password: form[0].value,
          firstName :form[1].value,
          lastName :form[2].value,
          email : form[3].value,
          birthDate :form[4].value,
          address: form[5].value,
          city:form[6].value,
        }
        
        axios
        .post("http://localhost:8808/edit", values)
        .then((response) => {
          console.log("testttt")
          console.log(response.data)
        })
  
      }
      
      const handleChange = (e) => {
        setUser({
          ...user ,
          [e.currentTarget.name] : e.currentTarget.value
        })
      }


      

  return (
    
       <div className="all">
      <EFAManagerNavBar />
      <div className="signupcontainer">
        {!loading ?
        <div className="signup">
       
          <Form onSubmit={handleSubmit}>
          <h1 style={{color:"white", fontWeight: "1000" }}>Edit Info</h1>
     
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left"> Password </FormLabel>
              <FormControl
                type="password"
                placeholder="Enter password"
                name="password"
                value={user.password}
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > FirstName </FormLabel>
              <FormControl
                type="text"
                placeholder="Enter FirstName"
                name="firstname"
                value={user.firstname}
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Last Name </FormLabel>
              <FormControl
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={user.lastname}
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Email </FormLabel>
              <FormControl
                type="email"
                placeholder="email"
                name="email"
                value={user.email}
                required
                onChange={handleChange}
              />
            </FormGroup>


            <FormGroup className="mb-3 Formclass input-login">
              <FormLabel className="text-left" > Birthdate </FormLabel>
              <FormControl
                type="date"
                placeholder="Enter birthdate"
                name="birthdate"
                value={new Date(user.birthdate).toISOString().split("T")[0]}
                required
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </FormGroup>
            <Button className="SubmitLogin" variant="primary" type="submit">
              Edit Info
            </Button>
          </Form>
        </div> :  <h1>loading</h1>}
      </div> 
    </div>
  );
}
export default Editmanager;
