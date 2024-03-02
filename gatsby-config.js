const { languages, defaultLanguage } = require('./src/languages');

module.exports = {
  siteMetadata: {
    title: `Molino Navarenas`,
    siteUrl: `https://www.molinonavarenas.com`,
    defaultLanguage: `es`,
  },
  plugins: [
    `gatsby-plugin-graphql-codegen`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'locale',
        path: './src/locales/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'srcImages',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages,
        defaultLanguage,
        siteUrl: 'http://localhost:8000',
        i18nextOptions: {
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: 'common',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `Molino Navarenas`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    },
  ],
};
