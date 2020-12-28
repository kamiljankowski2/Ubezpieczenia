import React from "react";
import { graphql } from "gatsby";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import "../assets/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";

const Post = ({ pageContext: { slug }, data: { post } }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.title} – Elwart Ubezpieczenia</title>
        <meta name="description" content="" />
      </Helmet>
      <Navigation />

      <Container className="mt-5">
        <Row>
          <Col lg={12} className="mx-0 my-4 post-cover-container">
            <img src={post.cover.url} className="post-cover" alt={post.title} />
          </Col>
        </Row>
        <h1 className="h2 font-weight-bold mb-4 border-heading mb-3">
          {post.title}
        </h1>

        <main
          className="single-offer"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
      <Footer />
    </>
  );
};

export const query = graphql`
  query fetchNews($url: String) {
    post: datoCmsNews(url: { eq: $url }) {
      id
      title
      content
      cover {
        url
      }
    }
  }
`;

export default Post;
