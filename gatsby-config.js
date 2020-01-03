require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `NRDWARE`,
    description: `En esta producción original de Spotify comentamos los eventos y lanzamientos más sobresalientes de la cultura geek en compañía de Mariano Latapí, Claudio Quiroz, Miguel Asher Sandoval y Lorenzo Grajales, cuatro de los nerdos mejor conocidos en la República Mexicana. Videojuegos, películas, series, cómics, juguetes y música friki, todo ello y más tiene su lugar en NRDWARE, el podcast para el nerdo que llevamos dentro.`,
    author: `Diseño por @violetstarfish y desarrollo por @betoarpi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `nrdware`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
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
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#E5BE21`,
        theme_color: `#F62AB0`,
        display: `minimal-ui`,
        //icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`
  ],
}