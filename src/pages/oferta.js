import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import oferta from "../assets/images/oferta.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "gatsby";

const OfferList = ({ data }) => {
  const offer = data.allDatoCmsOffer.edges;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <title>
          Oferta ubezpieczeń: szkolne, tursystyczne, na życie – Bydgoszcz –
          Elwart Ubezpieczenia
        </title>
        <meta
          name="description"
          content="Szukasz dobrego ubezpieczenia dla siebie lub dla swojej firmy? Odwiedź naszą stronę i sprawdź aktualną ofertę ubezpieczeń komunikacyjnych, mieszkań i domów, zdrowotnych, szkolnych oraz firmowych."
        />
      </Helmet>

      <Navigation />
      <main>
        <section className="container mt-5">
          <Row>
            <Col md={6} sm={12} className="mb-3">
              <img
                src={oferta}
                alt="Ubezpieczenie na życie - pomoc"
                className="section-image"
              />
            </Col>
            <Col md={6} sm={12} className="mt-lg-5 mt-md-0">
              <h1 className="h2 font-weight-bold mb-4 border-heading">
                Oferta ubezpieczeń – Bydgoszcz
              </h1>
              <main>
                <p>
                  W naszej szerokiej ofercie posiadamy produkty, które spełnią
                  wszystkie Państwa wymagania. Współpracujemy z największymi
                  Towarzystwami Ubezpieczeniowymi m.in.: PZU, Allianz, Link4,
                  Proama, Ergo Hestia, AXA, Warta/HDI, Generali, dzięki czemu
                  możemy zaoferować dla Państwa najlepsze rozwiązania. W ofercie
                  posiadamy ubezpieczenia komunikacyjne, na życie, mieszkań i
                  domów, turystyczne, szkolne, a także ubezpieczenia dla firm
                  oraz ubezpieczenie GAP.
                </p>
              </main>
              <Link to="/kontakt" className=" btn btn-primary btn-navy">
                Napisz do nas!
              </Link>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="mx-auto mt-5  offer-list">
              <h2 className=" font-weight-bold border-heading my-5  ">
                Ubezpieczamy w każdej dziedzinie
              </h2>
              <ListGroup className="list-group-offer mx-auto">
                {offer.map(({ node }) => {
                  return (
                    <li className="list-item" key={node.url}>
                      <Link to={node.url} className="offer-link">
                        <img
                          src={node.icon.url}
                          alt="Ubezpieczenie na życie - pomoc"
                          className="offer-icon"
                        />

                        {node.title}
                      </Link>
                    </li>
                  );
                })}
              </ListGroup>
            </Col>
          </Row>
        </section>
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  {
    allDatoCmsOffer {
      edges {
        node {
          title
          url
          content
          icon {
            alt
            url
          }
        }
      }
    }
  }
`;

export default OfferList;
