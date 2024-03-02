import React from 'react';
import 'primeicons/primeicons.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import  'primeflex/primeflex.css';
// CSS not modular here to provide global styles
import './Globals.css';
import { PrimeReactProvider } from 'primereact/api';
import { createEvent, createStore } from 'effector';
import { Config, businessConfig } from '../../websiteContent';
export const $business = createStore<Config>(businessConfig);
export const setBusiness = createEvent<Config>();
$business.on(setBusiness, (_, business) => business);

const Layout = ({
  children,
  disablePaddingBottom = false,
}: {
  children: React.ReactNode;
  disablePaddingBottom?: boolean;
}) => {
  return (
    <>
      {/* needed for themes */}
      <PrimeReactProvider value={{ appendTo: 'self' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </PrimeReactProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
