module.exports = {
  siteMetadata: {
    title: "Elwart Ubezpieczenia",
    siteUrl: `https://elwartubezpieczenia.pl/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "7b158834e3bb8f25b0a2aa6644e19a",
      },
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://elwartubezpieczenia.pl/",
        sitemap: "https://elwartubezpieczenia.pl/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
