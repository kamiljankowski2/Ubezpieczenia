import * as React from "react";
import { Link } from "gatsby";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
const NotFoundPage = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "pl",
        }}
      >
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex,follow" />
        <title>
          404 Strona nie istnieje – Bydgoszcz – Elwart Ubezpieczenia
        </title>
        <meta name="description" content="" />
      </Helmet>
      <Navigation />
      <Container>
        <main className="d-flex flex-column align-items-center justify-content-center section-404">
          <h1 className="h2 font-weight-bold mb-4 border-heading">
            Nie ma takiej strony
          </h1>

          <p className="text-center">
            Szukana przez Ciebie strona, nie istnieje w serwisie
            <a href="www.elwartubezpieczenia.pl"> www.elwartubezpieczenia.pl</a>
            .
            <br />
          </p>
          <Link className="btn btn-primary btn-navy mx-auto" to="/">
            Powrót do strony głównej
          </Link>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default NotFoundPage;
