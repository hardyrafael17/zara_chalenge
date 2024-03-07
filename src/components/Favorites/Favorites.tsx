import React, { useContext, useEffect, useState } from 'react';
import * as styles from './Favorites.module.css';
import { classNames } from 'primereact/utils';
import HeroContext from '../../context/HeroProvider';

export const Favorites = () => {
  const heroProviderValue = useContext(HeroContext);

  return (
    <div
      className={classNames([
        heroProviderValue.showFavoritesSearch
          ? styles.animateIn
          : styles.animateOut,
        styles.favoritesTitle,
      ])}
    >
      <p>Favorites</p>
    </div>
  );
};

export default Favorites;
