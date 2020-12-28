import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "gatsby";
import logo from "../assets/images/logo.png";
import { Facebook } from "react-bootstrap-icons";

const Footer = ({ data }) => {
  return (
    <>
      <footer className="footer bg-navy mt-5">
        <Container fluid>
          <Container>
            <Row>
              <Col md={4} sm={12} className="left-column column mb-5">
                <img src={logo} alt="Elwart Ubezpieczenia" className="mb-4" />
                <a href="www.facebook.pl" className="social-link">
                  <Facebook size={35} />
                </a>
              </Col>
              <Col md={4} sm={12} className="left-column column ">
                <ul className="footer-list">
                  <li>
                    <Link to="/" className="footer-link font-weight-bold ">
                      Strona główna
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/kontakt"
                      className="footer-link font-weight-bold "
                    >
                      Kontakt
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/aktualnosci"
                      className="footer-link font-weight-bold "
                    >
                      Aktualności
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/polityka-prywatnosci"
                      className="footer-link font-weight-bold "
                    >
                      Polityka prywatności
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={4} sm={12} className="left-column column ">
                <Link
                  to="/oferta"
                  className="footer-link font-weight-bold footer-link-offer"
                >
                  Oferta
                </Link>
                <ul className="footer-list footer-list-offer ">
                  <li>
                    <Link
                      to="/oferta/ubezpieczenia-zdrowotne-bydgoszcz"
                      className="footer-link "
                    >
                      Ubezpieczenie zdrowotne
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/oferta/ubezpieczenia-turystyczne-bydgoszcz"
                      className="footer-link  "
                    >
                      Ubezpieczenie turystyczne
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/oferta/ubezpieczenia-szkolne-bydgoszcz"
                      className="footer-link  "
                    >
                      Ubezpieczenie szkolne
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/oferta/ubezpieczenia-komunikacyjne-w-bydgoszczy"
                      className="footer-link  "
                    >
                      Ubezpieczenie komunikacyjne
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
