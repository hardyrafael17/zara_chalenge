import React, { useState, useEffect, createRef, useRef } from 'react';
import * as styles from './Header.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import { classNames } from 'primereact/utils';
import { useContext } from 'react';
import { HeroContext } from '../../context/HeroProvider';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';

export const Header = () => {
  const heroContextValue = useContext(HeroContext);
  const favoriteCount = heroContextValue.favoriteHeroes.length;
  const isFavorite = favoriteCount > 0;

  const marvelLogoSrc = '/headerLogo.png';
  const outlinedWhiteHeart = '/outlinedWhiteHeart.png';
  const filledRedHeart = '/redHeart.png';

  const location = useLocation().pathname;
  useEffect(() => {
    if (location === '/favorites/')
      heroContextValue.setShowFavoritesSearch(true);
  }, [location]);

  return (
    <header className={styles.headerHeader}>
      <div>
        <img
          onClick={() => {
            heroContextValue.setSearchInput('');
            heroContextValue.setShowFavoritesSearch(false);
            navigate('/');
          }}
          className={styles.logo}
          src={marvelLogoSrc}
          alt="Logo"
        />
      </div>

      <div
        className={styles.favoriteBadgeAndCounterCointainerHeader}
        onClick={() => {
          if (location !== '/favorites/') {
            navigate('/favorites');
          }
        }}
      >
        <div>
          <img
            className={classNames([
              isFavorite ? styles.hidden : styles.favoriteBadgeHeader,
            ])}
            src={outlinedWhiteHeart}
            alt="favorites heart indicator"
          />
          <img
            className={classNames([
              !isFavorite ? styles.hidden : styles.favoriteBadgeHeader,
            ])}
            src={filledRedHeart}
            alt="favorites heart indicator"
          />
        </div>
        <div className={classNames([styles.counterHeader])}>{favoriteCount}</div>
      </div>
    </header>
  );
};
export default Header;
