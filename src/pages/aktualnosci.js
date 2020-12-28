import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "gatsby";

const News = ({ data }) => {
  const newsList = data.allDatoCmsNews.edges;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <title>
          Aktualności o ubezpieczniach – Bydgoszcz – Elwart Ubezpieczenia
        </title>
        <meta
          name="description"
          content="Chętnie dzielimy się informacjami z branży ubezpieczeń i życia naszej firmy. Znajdziesz u nas aktualne artykuły odnośnie kar za brak obowiązkowego ubezpieczenia OC."
        />
      </Helmet>

      <Navigation />
      <Container>
        <Row className="my-5">
          <Col lg={12} className="mx-auto  offer-list">
            <h1 className="h2 font-weight-bold mb-4 border-heading">
              Najnowsze aktualności o ubezpieczniach
            </h1>
            <main className="section-main">
              <ListGroup variant="flush" className="mt-5">
                {newsList.map(({ node }) => {
                  return (
                    <li
                      className="list-group-item single-post"
                      key={node.title}
                    >
                      <img
                        src={node.cover.url}
                        className="thumbnail"
                        alt={node.title}
                      />
                      <div className="post-info">
                        <h2 className="border-heading font-weight-bold post-heading">
                          {node.title}
                        </h2>
                        {node.date}
                        <Link
                          to={node.url}
                          className="btn btn-primary btn-navy btn-more"
                        >
                          Czytaj
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ListGroup>
            </main>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export const query = graphql`
  {
    allDatoCmsNews {
      edges {
        node {
          title
          date
          url
          cover {
            alt
            url
          }
        }
      }
    }
  }
`;

export default News;
