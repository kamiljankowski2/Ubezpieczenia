import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Kontakt = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kontakt – Bydgoszcz – Elwart Ubezpieczenia</title>
        <meta
          name="description"
          content="Potrzebujesz wsparcia przy zakupie lub obsłudze ubezpieczenia? Skontaktuj się nami! Infolinia dostępna od poniedziałku do piątku w godzinach 08:00 - 16:00, w soboty: 08:00 - 14:00.
          "
        />
      </Helmet>

      <Navigation />
      <section className="container mt-5">
        <Row>
          <Col md={6} sm={12} className="mb-3">
            <h1 className="h2 font-weight-bold mb-4 border-heading">
              Skontaktuj się z nami
            </h1>
            <p>
              Wypełnij poniższy formularz, a my pomożemy znaleźć atrakcyjną
              ofertę ubezpieczeniową, która wpisze się w Twoje oczekiwania.
            </p>
            <ContactForm />
          </Col>
          <Col md={6} sm={12} className="mt-lg-5 mt-md-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4788.705507167768!2d18.06168!3d53.121813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9100845e6e05b3ad!2sElwart%20Ubezpieczenia!5e0!3m2!1spl!2spl!4v1608979750176!5m2!1spl!2spl"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              className="google-map"
              title="Google map"
            ></iframe>
            <address>
              <strong>Elwart Ubezpieczenia</strong> <br />
              <span>ul. Karola Szajnochy 2 lokal 320, 85-738 Bydgoszcz</span>
              <br />
              <span className="font-weight-bold">NIP:</span> 5581857844
              <br />
              <span className="font-weight-bold">REGON:</span> 385000183
              <br />
              <span className="font-weight-bold">Godziny otwarcia:</span> 9:00 –
              17:00
              <br />
              <span className="font-weight-bold">Telefon:</span>
              <a href="tel:+48785192916">+48 785-192-916</a>
              <a href="tel:+48695832045">+48 695-832-045</a>
              <br />
              <span className="font-weight-bold">Email: </span>
              <a href="mailto: ubezpieczenia@elwart.com.pl">
                ubezpieczenia@elwart.com.pl
              </a>
            </address>
          </Col>
        </Row>
      </section>
      <Footer />
    </>
  );
};
export default Kontakt;
