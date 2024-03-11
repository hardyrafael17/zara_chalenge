module.exports = {
  siteMetadata: {
    title: `Molino Navarenas`,
    siteUrl: `https://www.molinonavarenas.com`,
    defaultLanguage: `es`,
  },
  plugins: [
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        sourceMap: true,
        postcssOptions: {
          map: true,
          absolute: true
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `Zara Chalenge`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
