import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { PrimeReactProvider } from 'primereact/api';
import Layout from './src/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import { createEvent, createStore } from 'effector';
import { Config, businessConfig } from './src/websiteContent';
export const $business = createStore<Config>(businessConfig);
export const setBusiness = createEvent<Config>();
$business.on(setBusiness, (_, business) => business);

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  const value: Partial<APIOptions> = {
    appendTo: 'self',
  };

  return (
    <PrimeReactProvider value={value}>
      <Helmet>
        <title>Home</title>
        <link
          id="app-theme"
          rel="stylesheet"
          href="/themes/lara-light-blue/theme.css"
        />
      </Helmet>
      <Layout>{element}</Layout>
    </PrimeReactProvider>
  );
};
