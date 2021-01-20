import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
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
              <NavDropdown title="Oferta" id="basic-nav-dropdown">
                <Link to="/oferta" className="dropdown-item">
                  Pełna oferta ubezpieczeń
                </Link>
                <NavDropdown.Divider />
                <Link
                  to="/oferta/ubezpieczenia-komunikacyjne-w-bydgoszczy"
                  className="dropdown-item"
                >
                  Ubezpieczenia komunikacyjne
                </Link>
                <Link
                  to="/oferta/ubezpieczenia-firm-bydgoszcz"
                  className="dropdown-item"
                >
                  Ubezpieczenia firm
                </Link>
                <Link
                  to="/oferta/ubezpieczenia-szkolne-bydgoszcz"
                  className="dropdown-item"
                >
                  Ubezpieczenia szkolne
                </Link>
                <Link
                  to="/oferta/ubezpieczenia-zdrowotne-bydgoszcz"
                  className="dropdown-item"
                >
                  Ubezpieczenia zdrowotne
                </Link>

                <Link
                  to="/oferta/ubezpieczenia-turystyczne-bydgoszcz"
                  className="dropdown-item"
                >
                  Ubezpieczenia turystyczne
                </Link>
                <Link
                  to="/oferta/ubezpieczenia-majatkowe-w-bydgoszczy"
                  className="dropdown-item"
                >
                  Ubezpieczenia domu
                </Link>
                <Link
                  to="/oferta/ubezpieczenia-zyciowe-bydgoszcz"
                  className="dropdown-item"
                >
                  Ubezpieczenia życiowe
                </Link>
                <Link
                  to="/oferta/ubezpieczenia-mieszkan-w-bydgoszczy"
                  className="dropdown-item"
                >
                  Ubezpieczenia mieszkań
                </Link>
              </NavDropdown>
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
