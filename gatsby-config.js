require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Un Podcast de Front-end en Español`,
    description: `En este podcast Rob Arroyo te comparte información, noticias y recursos acerca del mundo del desarrollo Front-end.`,
    author: `Diseño y desarrollo por @betoarpi`,
    twitterUsername: '@vainillapodcast'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
          if (doc.type === 'pages') return "/page/" + doc.uid;
        },
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VainillaTheme`,
        short_name: `VainillaTheme`,
        start_url: `/`,
        background_color: `#edf0e9`,
        theme_color: `#fcdc48`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["silkablack, silkamono"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
  ],
}