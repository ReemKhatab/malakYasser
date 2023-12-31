import Container from "react-bootstrap/Container";
import { useState , useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";
import { Button } from "react-bootstrap";


function NavBar() {

  const log = localStorage.getItem("isLogged")
  const toggle = () => {
    localStorage.setItem("isLogged" , false)
    localStorage.setItem("username" , "")
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary NavBarStyles">
      <Container>
        <Navbar.Brand href="/">Tazkartak </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {(log === "true") ? <Nav.Link href="/Edituser">Edit Info</Nav.Link> : <Nav.Link href="Login">Log in</Nav.Link>}
            {(log === "true") ? <Nav.Link href="/" onClick={toggle}>Logout</Nav.Link> : <Nav.Link href="Signup">Sign Up</Nav.Link>}
            {(log === "true") && <Nav.Link href="/Cart">View Tickets</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
