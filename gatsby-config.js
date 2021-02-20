module.exports = {
  siteMetadata: {
    title: `Web Logo Design Company Mombasa - Mobile App Development`,
    description: `Bitcix is a digital agency that focuses in web design and mobile app development solutions.Top rated web and mobile design company in Mombasa, Kenya.`,
    author: `Bitcix Limited`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-remark-prismjs`,
    {
      resolve: `gatsby-plugin-load-script`,
      options: {
        id: `s9-sdk`,
        async: true,
        defer: true,
        content: `1295b7a19de8445181e89d1b37d2a1d9`,
        src: `//cdn.social9.com/js/socialshare.min.js`
      },
    },
    {
      resolve: `gatsby-plugin-social9-socialshare`,
      options: {
        content: `1295b7a19de8445181e89d1b37d2a1d9`,
        async: true,
        defer: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth:590,
            },
          },
          `gatsby-remark-images-anywhere`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-bitcix.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
