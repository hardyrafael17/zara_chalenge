import React from 'react';
import Layout from './src/components/Layout';
import HeroProvider from './src/context/HeroProvider';
import { Helmet } from 'react-helmet';

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <title>Marvel Heroes</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Helmet>
      <Layout>{element}</Layout>
    </>
  );
};

// export const wrapRootElement = ({ element }) => {
//   return <HeroProvider>{() => element}</HeroProvider>;
// };
