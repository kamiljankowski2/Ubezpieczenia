module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "7b158834e3bb8f25b0a2aa6644e19a",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
