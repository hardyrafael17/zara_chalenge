import * as React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import type { GatsbyBrowser } from 'gatsby';
import Layout from './src/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return (
    <PrimeReactProvider value={{ appendTo: 'self' }}>
      <Helmet>
        <title>Home</title>
        <link
          id="app-theme"
          rel="stylesheet"
          href="/themes/lara-dark-blue/theme.css"
        />
      </Helmet>
      <Layout>{element}</Layout>
    </PrimeReactProvider>
  );
};
