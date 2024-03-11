import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect, createRef, useRef } from 'react';
import * as styles from './FavoriteHeart.module.css';
import { classNames } from 'primereact/utils';

const FavoriteHeart = ({
  isFavorite = false,
  isHovered = false,
  isCounter = false,
  favoriteCounter,
  additionalClassname,
}: {
  isFavorite: boolean;
  isCounter: boolean;
  favoriteCounter: number;
  isHovered: boolean;
  additionalClassname?: string;
}) => {
  const outlinedWhiteHeart = '/outlinedWhiteHeart.png';
  const filledRedHeart = '/redHeart.png';
  const fullWhiteHeart = '/fullWhite.png';
  let showOutlinedWhiteHeart, showFilledRedHeart, showFullWhiteHeart;
  if (isFavorite && isHovered) showFullWhiteHeart = true;
  else if (isFavorite && !isHovered) showFilledRedHeart = true;
  else showOutlinedWhiteHeart = true;

  return (
    <div className={styles.favoritesContainer}>
      <img
        className={classNames([
          showFilledRedHeart ? styles.image : styles.hidden,
        ])}
        src={filledRedHeart}
        alt="no favorite heart indicator"
      />
      <img
        className={classNames([
          showOutlinedWhiteHeart ? styles.image : styles.hidden,
        ])}
        src={outlinedWhiteHeart}
        alt="no favorite heart indicator"
      />
      <img
        className={classNames([
          showFullWhiteHeart ? styles.image : styles.hidden,
        ])}
        src={fullWhiteHeart}
        alt="no favorite heart indicator"
      />
    </div>
  );
};

export default FavoriteHeart;
