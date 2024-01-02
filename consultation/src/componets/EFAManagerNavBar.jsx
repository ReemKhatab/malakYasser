import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

function NavBar() {
  const username = localStorage.getItem("username");
  const toggle = () => {
    localStorage.setItem("isLogged", false);
    localStorage.setItem("username", "");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary NavBarStyles">
      <Container>
        <Navbar.Brand href="/EFA/View">Tazkartak </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/EFA/View">View Matches</Nav.Link>
            <Nav.Link href="/EFA/Edit">Edit Matches</Nav.Link>
            <Nav.Link href="/EFA/Add">Add Stadium</Nav.Link>
            <Nav.Link href="/EFA/Create">Create Match</Nav.Link>
            <Nav.Link href="/" onClick={toggle}>
              Log Out
            </Nav.Link>
          </Nav>
          <Nav.Link href="/Editmanager">{username}</Nav.Link>
          <Nav.Link href="/Editmanager">
            <AccountCircleRoundedIcon fontSize="large" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
