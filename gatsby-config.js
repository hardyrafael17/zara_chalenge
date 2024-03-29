module.exports = {
  flags: {
    // DEV_SSR: true,
    FAST_DEV: true,
    // PARALLEL_SOURCING: true,
    DETECT_NODE_MUTATIONS: true
  },
  siteMetadata: {
    title: `Zara Chalenge`,
    defaultLanguage: `es`,
    siteUrl: `https://marvel-heroes-zara.netlify.app`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        sourceMap: true,
        postcssOptions: {
          map: true,
          absolute: true,
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
        icon: `./static/favicon.png`,
      },
    },
  ],
};
