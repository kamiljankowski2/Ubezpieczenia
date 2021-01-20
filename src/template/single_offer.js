import React from "react";
import { graphql } from "gatsby";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import "../assets/style.css";
import ContactForm from "../components/ContactForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";

const singleOffer = ({ pageContext: { slug }, data: { offer } }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "pl",
        }}
      >
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <title>{offer.title} – Elwart Ubezpieczenia</title>
        <meta name="description" content="" />
        <link
          rel="canonical"
          href={`https://elwartubezpieczenia.pl/oferta/${offer.url}`}
        />
      </Helmet>
      <Navigation />

      <Container className="mt-5">
        <h1 className="h2 font-weight-bold mb-4 border-heading mb-3">
          {offer.title}
        </h1>

        <main
          className="single-offer"
          dangerouslySetInnerHTML={{ __html: offer.content }}
        />

        <Row>
          <Col lg={6} className="mx-auto mt-5  offer-list">
            <h3 className="h2 font-weight-bold mb-4 border-heading mb-5">
              Skontaktuj się z nami!
            </h3>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export const query = graphql`
  query fetchOffer($url: String) {
    offer: datoCmsOffer(url: { eq: $url }) {
      id
      title
      content
      url
    }
  }
`;

export default singleOffer;
