import React, { useState, useEffect, createRef, useRef } from 'react';
import * as styles from './Header.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import { classNames } from 'primereact/utils';
import { useContext } from 'react';
import { HeroContext } from '../../context/HeroProvider';

export const Header = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>(['TODO']);
  const HeroContextValue = useContext(HeroContext);

  useEffect(() => {
    console.log('HeroContextValue', HeroContextValue);
  }, []);
  // TODO - favorite state

  const marvelLogoSrc = '../../assets/img/headerLogo.png';
  const outlinedWhiteHeart = '../../assets/img/outlinedWhiteHeart.png';
  const filledRedHeart = '../../assets/img/redHeart.png';

  return (
    <header className={styles.header}>
      <StaticImage className={styles.logo} src={marvelLogoSrc} alt="Logo" />
      <div className={styles.favoritesContainer}>
        <StaticImage
          className={favorites.length ? styles.hidden : styles.favoriteBadge}
          src={outlinedWhiteHeart}
          alt="favorites heart indicator"
        />
        <StaticImage
          className={classNames([styles.favoriteBadge])}
          src={filledRedHeart}
          alt="favorites heart indicator"
        />
        <div className={classNames([styles.counter])}>3</div>
      </div>
    </header>
  );
};
export default Header;
