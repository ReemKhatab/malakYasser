import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary NavBarStyles">
      <Container>
        <Navbar.Brand  href="/">Tazkartak </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/EFA/View">View Matches</Nav.Link>
            <Nav.Link href="/EFA/Edit">Edit Matches</Nav.Link>
            <Nav.Link href="/EFA/Add">Add Stadium</Nav.Link>
            <Nav.Link href="/EFA/Create">Create Match</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

