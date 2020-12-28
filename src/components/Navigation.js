import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "gatsby";
import logo from "../assets/images/logo.png";

const Navigation = ({ data }) => {
  return (
    <>
      <Navbar className="bg-navy" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Elwart Ubezpieczenia" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Strona główna
              </Link>
              <Link to="/oferta" className="nav-link">
                Oferta
              </Link>
              <Link to="/kontakt" className="nav-link">
                Kontakt
              </Link>
              <Link to="/aktualnosci" className="nav-link">
                Aktualności
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
