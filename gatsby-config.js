module.exports = {
  siteMetadata: {
    title: `Fuerteventura Dog Rescue`,
    description: `A boilerplate with my go-to libraries pre-installed.`,
    author: `David Andrews`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-leaflet`,
      options: {
        linkStyles: true
      }
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fdr-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-transition-link`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
        ],
      },
    },
    "gatsby-remark-copy-linked-files",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
