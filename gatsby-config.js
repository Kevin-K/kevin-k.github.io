module.exports = {
  siteMetadata: {
    title: 'Kevin J. Kelly',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'kevin-kelly',
        short_name: 'kevin-kelly',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png', // This path is relative to the root of the site.
      },
    },    
    'gatsby-plugin-top-layout',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-offline',
  ],
};
