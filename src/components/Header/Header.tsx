import React, { useEffect } from 'react';
import * as styles from './Header.module.css';
import { classNames } from 'primereact/utils';
import { useContext } from 'react';
import { HeroContext } from '../../context/HeroProvider';
import { useLocation, navigate } from '@reach/router';

export const Header = () => {
  const heroContextValue = useContext(HeroContext);
  let favoriteCount = heroContextValue.favoriteHeroes.length;
  const isFavorite = favoriteCount > 0;

  const marvelLogoSrc = '/headerLogo.png';
  const outlinedWhiteHeart = '/outlinedWhiteHeart.png';
  const filledRedHeart = '/redHeart.png';

  const setShowFavoritesSearch = heroContextValue.setShowFavoritesSearch;
  const location = useLocation().pathname;

  useEffect(() => {
    if (location.includes('favorites')) {
      setShowFavoritesSearch(true);

    }
  }, [location]);

  const handleLogoClick = () => {
    navigate('/');
  }

  return (
    <header className={styles.headerHeader}>
      <div>
        <img
          onClick={() => {
          handleLogoClick();
          // heroContextValue.setSearchInput("hola") 
          //   // setShowFavoritesSearch(false);
          //   // navigate('/');
          }}
          className={styles.logo}
          src={marvelLogoSrc}
          alt="Logo"
        />
      </div>

      <div
        className={styles.favoriteBadgeAndCounterCointainerHeader}
        onClick={() => {
          setShowFavoritesSearch(true);
          navigate('/favorites');
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
        <div className={classNames([styles.counterHeader])}>
          {favoriteCount}
        </div>
      </div>
    </header>
  );
};
export default Header;
