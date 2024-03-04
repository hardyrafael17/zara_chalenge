import React, { useState, useEffect, createRef, useRef } from 'react';
import * as styles from './Header.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import { classNames } from 'primereact/utils';
import { useContext } from 'react';
import { HeroContext } from '../../context/HeroProvider';
import { navigate } from 'gatsby';

export const Header = () => {
  const HeroContextValue = useContext(HeroContext);
  const favoriteCount = HeroContextValue.favoriteHeroes.length;
  const isFavorite = favoriteCount > 0;

  const marvelLogoSrc = '../../assets/img/headerLogo.png';
  const outlinedWhiteHeart = '../../assets/img/outlinedWhiteHeart.png';
  const filledRedHeart = '../../assets/img/redHeart.png';
  console.log("rendefing")

  return (
    <header className={styles.header}>
      <div
        onClick={() => { 
          console.log('navigating');
          navigate('/');
        }}
        className={styles.logoWrapper}
      >
        <StaticImage className={styles.logo} src={marvelLogoSrc} alt="Logo" />
      </div>
      <div
        className={styles.favoritesContainer}
        onClick={() => {
          console.log('navigating');
          navigate('/favorites/');
        }}
      >
        <StaticImage
          className={classNames([
            isFavorite ? styles.hidden : styles.favoriteBadge,
          ])}
          src={outlinedWhiteHeart}
          alt="favorites heart indicator"
        />
        <StaticImage
          className={classNames([
            !isFavorite ? styles.hidden : styles.favoriteBadge,
          ])}
          src={filledRedHeart}
          alt="favorites heart indicator"
        />
        <div className={classNames([styles.counter, styles.navIcon])}>
          {favoriteCount}
        </div>
      </div>
    </header>
  );
};
export default Header;
