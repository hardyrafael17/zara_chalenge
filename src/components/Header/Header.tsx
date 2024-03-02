import React, { useState, useEffect, createRef, useRef } from 'react';
import * as styles from './Header.module.css';
import { StaticImage } from 'gatsby-plugin-image';

export const Header = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>(['TODO']);

  useEffect(() => {}, []);
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
          className={favorites.length ? styles.favoriteBadge : styles.hidden}
          src={filledRedHeart}
          alt="favorites heart indicator"
        />
        <div className="favorte counter">?</div>
      </div>
    </header>
  );
};
export default Header;
