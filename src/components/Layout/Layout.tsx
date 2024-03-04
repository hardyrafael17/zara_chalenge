import React from 'react';
import 'primeicons/primeicons.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import 'primeflex/primeflex.css';
// CSS not modular here to provide global styles
import './Globals.css';
import { PrimeReactProvider } from 'primereact/api';
import { HeroProvider } from '../../context/HeroProvider';
import { createEvent, createStore } from 'effector';

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
      {/* <PrimeReactProvider value={{ appendTo: 'self' }}> */}
      <HeroProvider>
        <Header />
        <main>{children}</main>
      </HeroProvider>
      {/* </PrimeReactProvider> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
