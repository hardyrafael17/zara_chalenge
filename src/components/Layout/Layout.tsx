import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as styles from './Layout.module.css';

// CSS not modular here to provide global styles
import './Globals.css';

const Layout = ({ children, disablePaddingBottom = false }:
  { children: React.ReactNode, disablePaddingBottom?: boolean }) => {
  return (
    <>
      <Helmet>
        {/* Add any sitewide scripts here */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Helmet>

      <Header />
      <main
        className={`${styles.main} ${disablePaddingBottom === false ? styles.disablePaddingBottom : ''
          }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;