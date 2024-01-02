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
        <Navbar.Brand href="/SiteAdministrator">Tazkartak </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={toggle}>
              Log Out
            </Nav.Link>
          </Nav>
          <Nav.Link href="/Editadmin">
            {username}
          </Nav.Link>
          <Nav.Link href="/Editadmin">
          <AccountCircleRoundedIcon fontSize="large" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
