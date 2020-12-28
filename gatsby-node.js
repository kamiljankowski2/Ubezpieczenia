exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allDatoCmsOffer {
        edges {
          node {
            title
            url
            content
          }
        }
      }
      allDatoCmsNews {
        edges {
          node {
            title
            date
            url
            content
          }
        }
      }
    }
  `);

  const offer = result.data.allDatoCmsOffer.edges;
  const news = result.data.allDatoCmsNews.edges;

  const offerTemplate = require.resolve("./src/template/single_offer.js");
  const newsTemplate = require.resolve("./src/template/post.js");

  offer.forEach(({ node }, index) => {
    const { url } = node;

    createPage({
      path: `oferta/${url}`,
      component: offerTemplate,
      context: {
        url,
      },
    });
  });

  news.forEach(({ node }, index) => {
    const { url } = node;

    createPage({
      path: `aktualnosci/${url}`,
      component: newsTemplate,
      context: {
        url,
      },
    });
  });
};
