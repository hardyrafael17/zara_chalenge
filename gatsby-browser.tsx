import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import Layout from './src/components/Layout/Layout';
import { Helmet } from 'react-helmet';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return (
    <>
      <Helmet>
        <title>Marvel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Layout>{element}</Layout>
    </>
  );
};
