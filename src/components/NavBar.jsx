import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import NavText from "./NavText";

const NavBar = () => {
  return (
    <Navbar
      // style={{ color: "black" }}
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="shadow-lg p-3 mb-5"
    >
      <Container>
        <Navbar.Brand
          className="navbar-logo"
        >
          Subramanya K S
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavLink className="nav-link" end to="/">
            <NavText title='Home'/>
            </NavLink>
            <NavLink className="nav-link" to="/about">
              <NavText title='About'/>
            </NavLink>
            <NavLink className="nav-link" to="/education">
            <NavText title='Education'/>
            </NavLink>
            <NavLink className="nav-link" to="/experience">
            <NavText title='Experience'/>
            </NavLink>
            <NavLink className="nav-link" to="/project">
            <NavText title='Projects'/>
            </NavLink>
            <NavLink className="nav-link" to="/skills">
            <NavText title='Skills'/>
            </NavLink>
            <NavLink className="nav-link" to="/contact">
            <NavText title='Contact'/>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
