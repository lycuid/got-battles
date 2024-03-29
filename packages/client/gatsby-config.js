const Package = require('../../package');

module.exports = {
  siteMetadata: {
    title: `Game of Thrones Battles.`,
    description: Package.description,
    author: `@lycuid`,
  },
  pathPrefix: `/p/${Package.name}`,
  assetPrefix: `https://cdn.lycuid.dev`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/Images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/Fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: Package.name,
        short_name: Package.name,
        start_url: `/`,
        background_color: `#70a1ff`,
        theme_color: `#d59f78`,
        display: `minimal-ui`,
        icon: `src/Images/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
