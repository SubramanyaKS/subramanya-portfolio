import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import NavText from "./NavText";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="modern-navbar sticky-top"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-logo">
          Subramanya K S
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="align-items-lg-center">
            <NavLink className="nav-link" end to="/">
              <NavText title="Home" />
            </NavLink>
            <NavLink className="nav-link" to="/about">
              <NavText title="About" />
            </NavLink>
            <NavLink className="nav-link" to="/education">
              <NavText title="Education" />
            </NavLink>
            <NavLink className="nav-link" to="/experience">
              <NavText title="Experience" />
            </NavLink>
            <NavLink className="nav-link" to="/project">
              <NavText title="Projects" />
            </NavLink>
            <NavLink className="nav-link" to="/skills">
              <NavText title="Skills" />
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              <NavText title="Contact" />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
