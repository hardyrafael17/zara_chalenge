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
        <title>Home</title>
        <style type="text/css">{`
            body {
              width: 100vw%;
              margin: 0;
              padding: 0;
             {
         `}</style>
      </Helmet>
      <Layout>{element}</Layout>
    </>
  );
};
