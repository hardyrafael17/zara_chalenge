import React from 'react';
import 'primeicons/primeicons.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import 'primeflex/primeflex.css';

// CSS not modular here to provide global styles
import './Reset.css';
import './Globals.css';
import { HeroProvider } from '../../context/HeroProvider';

const Layout = ({
  children,
  disablePaddingBottom = false,
}: {
  children: React.ReactNode;
  disablePaddingBottom?: boolean;
}) => {
  return (
    <>
      <HeroProvider>
        <Header />
        <main>{children}</main>
      </HeroProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
