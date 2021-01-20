import * as React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carousel from "react-bootstrap/Carousel";
import cover1 from "../assets/images/cover1.png";
import cover2 from "../assets/images/cover2.png";
import cover3 from "../assets/images/cover3.png";
import favicon from "../assets/images/logo-image.png";
import komunikacyjne from "../assets/icons/komunikacyjne.png";
import turystyczne from "../assets/icons/turystyczne.png";
import mieszkan from "../assets/icons/mieszkan.png";
import { Link } from "gatsby";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import index from "../assets/images/index.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Allianz from "../assets/companies/Allianz.png";
import AXA from "../assets/companies/AXA.png";
import Balcia from "../assets/companies/Balcia.png";
import compensa from "../assets/companies/compensa.png";
import Ergohestia from "../assets/companies/Ergohestia.png";
import generali from "../assets/companies/generali.png";
import euroins from "../assets/companies/euroins.png";
import hdi from "../assets/companies/hdi.png";
import InterPolska from "../assets/companies/InterPolska.png";
import link4 from "../assets/companies/link4.png";
import mtu from "../assets/companies/mtu.png";
import Proama from "../assets/companies/Proama.png";
import pzu from "../assets/companies/pzu.png";
import TUW from "../assets/companies/TUW.png";
import TUZ from "../assets/companies/TUZ.png";
import Warta from "../assets/companies/Warta.png";
import wiener from "../assets/companies/wiener.png";
import YCD from "../assets/companies/YCD.png";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const newsList = data.allDatoCmsNews.edges;
  const CompanyList = data.allDatoCmsCompany.edges;
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "pl",
        }}
      >
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <title>
          Ubezpieczenia na życie, komunikacyjne, turystyczne i wiele innych –
          Elwart Ubezpieczenia
        </title>
        <meta
          name="description"
          content="Oferujemy kompleksowe ubezpieczenia komunikacyjne, turystyczne, mieszkań i domów, na życie, a także wiele innych. Wyliczymy dla Ciebie ofertę spośród 30 największych Towarzystw Ubezpieczeniowych. "
        />
        <link rel="canonical" href="https://elwartubezpieczenia.pl/" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navigation />
      <Carousel className="carousel" indicators={false}>
        <Carousel.Item>
          <picture>
            <source media="(min-width: 721px)" srcset={cover1} />
            <source media="(max-width: 720px)" srcset={cover3} />
            <img
              className="d-block w-100"
              src={cover1}
              alt="Kompleksowe ubezpieczenia – Bydgoszcz"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cover2}
            alt="Polisa bez wychodzenia z domu"
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <section className="container mt-5">
          <Row>
            <Col md={6} sm={12} className="mb-3">
              <img
                src={index}
                alt="Agent ubezpieczeniowy"
                className="section-image"
              />
            </Col>
            <Col md={6} sm={12} className="mt-5 mt-sm-0">
              <h2 className="h2 font-weight-bold mb-4 border-heading">
                Elwart Ubezpieczenia
              </h2>
              <p>
                W branży ubezpieczeniowej działamy ponad 4 lata. Proponujemy
                kompleksową obsługę ubezpieczeń uwzględniając indywidualne
                potrzeby naszych klientów. W naszej ofercie znajdziecie Państwo
                szeroką gamę ubezpieczeń wielu wiodących towarzystw
                ubezpieczeniowych. Oprócz kompleksowej oferty ubezpieczeń
                komunikacyjnych, majątkowych, firmowych, turystycznych,
                szkolnych oraz zdrowotnych, pomożemy Państwu w dopasowaniu do
                swoich potrzeb ubezpieczeń na życie.
              </p>
              <Link to="/kontakt" className=" btn btn-primary btn-navy">
                Napisz do nas!
              </Link>
            </Col>
          </Row>
        </section>
        <section className="mb-5">
          <Row>
            <Col lg={12} className="mx-auto  offer-list">
              <h1 className="h2 font-weight-bold border-heading my-5  ">
                Świadczymy kompleksowe usługi ubezpieczeniowe
              </h1>
              <ListGroup className="list-group-offer mx-auto">
                <li className="list-item list-item-index">
                  <Link
                    to="/oferta/ubezpieczenia-komunikacyjne-w-bydgoszczy"
                    className="offer-link"
                  >
                    <img
                      src={komunikacyjne}
                      alt="Ubezpieczenie komunikacyjne"
                      className="offer-icon  mt-4"
                    />
                    Ubezpieczenie komunikacyjne
                  </Link>
                </li>
                <li className="list-item list-item-index">
                  <Link
                    to="/oferta/ubezpieczenia-mieszkan-w-bydgoszczy"
                    className="offer-link"
                  >
                    <img
                      src={mieszkan}
                      alt="Ubezpieczenie mieszkań"
                      className="offer-icon"
                    />
                    Ubezpieczenie mieszkań
                  </Link>
                </li>
                <li className="list-item list-item-index">
                  <Link
                    to="/oferta/ubezpieczenia-turystyczne-bydgoszcz"
                    className="offer-link"
                  >
                    <img
                      src={turystyczne}
                      alt="Ubezpieczenie turystyczne"
                      className="offer-icon"
                    />
                    Ubezpieczenie turystyczne
                  </Link>
                </li>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="mx-auto mt-2  offer-list">
              <Link to="/oferta" className=" btn btn-primary btn-navy">
                Zobacz pełną ofertę!
              </Link>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col
              md={6}
              sm={12}
              className="mt-lg-5 mb-4 d-flex flex-column align-items-center"
            >
              <h3 className="h2 font-weight-bold mb-4 border-heading">
                Ubezpiecz się na podróż
              </h3>
              <p className="text-justify">
                Zbliżający się okres wakacyjny to czas, kiedy warto pomyśleć o
                dobrym ubezpieczeniu podróżnym. Możesz kupić polisę, która
                obejmuje wiele ryzyk lub zdecydować się na wariant standardowy.
                Dzięki temu, możesz bezpiecznie podróżować po kraju, jak również
                odwiedzać inne państwa i kontynenty. W ramach ochrony
                ubezpieczyciel pokryje koszty Twojego leczenia lub zrekompensuje
                utratę bagażu. Ubezpieczenie podróżne możesz rozszerzyć o pakiet
                OC turystyczne, opóźnienie lotu lub ochronę przewożonego sprzętu
                sportowego.
              </p>
              <Link to="/kontakt" className=" btn btn-primary btn-navy">
                Napisz do nas!
              </Link>
            </Col>
            <Col
              md={6}
              sm={12}
              className="mt-lg-5 mt-md-0 d-flex flex-column align-items-center"
            >
              <h3 className="h2 font-weight-bold mb-4 border-heading">
                Ubezpieczenie GAP
              </h3>
              <p className="text-justify">
                Ubezpieczenie GAP to zabezpieczenie straty finansowej, która
                powstaje na skutek utraty wartości Twojego pojazdu w czasie. W
                razie szkody GAP pokrywa różnicę pomiędzy wartością początkową
                pojazdu a jego aktualną ceną rynkową. Wysokość wypłaconego
                odszkodowania ułatwia zakup nowego pojazdu tej samej klasy lub
                spłatę zobowiązania leasingowego/kredytowego.
              </p>
              <Link to="/kontakt" className=" btn btn-primary btn-navy">
                Napisz do nas!
              </Link>
            </Col>
          </Row>
        </section>
        <section className="container company-section">
          <div className="d-flex">
            <h2 className="font-weight-bold border-heading  mx-auto company-heading">
              Współpracujemy z
            </h2>
          </div>
          <Slider className="mx-auto mt-5" {...settings}>
            <div className="company">
              <img src={Allianz} alt="Allianz" />
            </div>
            <div className="company">
              <img src={AXA} alt="AXA" />
            </div>
            <div className="company">
              <img src={Balcia} alt="Balcia" />
            </div>
            <div className="company">
              <img src={compensa} alt="Compensa" />
            </div>
            <div className="company">
              <img src={Ergohestia} alt="Ergohestia" />
            </div>
            <div className="company">
              <img src={euroins} alt="Euroins" />
            </div>
            <div className="company">
              <img src={generali} alt="Generali" />
            </div>
            <div className="company">
              <img src={hdi} alt="HDI" />
            </div>
            <div className="company">
              <img src={InterPolska} alt="Inter Polska" />
            </div>
            <div className="company">
              <img src={link4} alt="LINK4" />
            </div>
            <div className="company">
              <img src={mtu} alt="MTU" />
            </div>
            <div className="company">
              <img src={Proama} alt="Proama" />
            </div>
            <div className="company">
              <img src={pzu} alt="PZU" />
            </div>
            <div className="company">
              <img src={TUW} alt="TUW" />
            </div>
            <div className="company">
              <img src={TUZ} alt="TUZ" />
            </div>
            <div className="company">
              <img src={Warta} alt="Warta" />
            </div>
            <div className="company">
              <img src={wiener} alt="Wiener" />
            </div>
            <div className="company">
              <img src={YCD} alt="YCD" />
            </div>
            {CompanyList.map(({ node }) => {
              return (
                <div className="company" key={node.logo.alt}>
                  <img src={node.logo.url} alt={node.logo.url} />
                </div>
              );
            })}
          </Slider>
        </section>

        <section>
          <Row className="my-5">
            <Col lg={12} className="mx-auto  offer-list">
              <h2 className="h2 font-weight-bold mb-3 mt-4 border-heading">
                Aktualności
              </h2>
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
                          <h3 className="border-heading font-weight-bold post-heading">
                            {node.title}
                          </h3>
                          {node.date}
                          <Link
                            to={`aktualnosci/${node.url}`}
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
        </section>
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
    allDatoCmsCompany {
      edges {
        node {
          logo {
            alt
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
