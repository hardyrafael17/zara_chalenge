import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect, createRef, useRef } from 'react';
import * as styles from './FavoriteHeart.module.css';
import { classNames } from 'primereact/utils';

const FavoriteHeart = ({
  isFavorite = false,
  isHovered = false,
  isCounter = false,
  favoriteCounter,
}: {
  isFavorite: boolean;
  isCounter: boolean;
  favoriteCounter: number;
  isHovered: boolean;
}) => {
  const outlinedWhiteHeart = '../../assets/img/outlinedWhiteHeart.png';
  const filledRedHeart = '../../assets/img/redHeart.png';
  const fullWhiteHeart = '../../assets/img/fullWhite.png';
  let showOutlinedWhiteHeart, showFilledRedHeart, showFullWhiteHeart;
  if(isFavorite && isHovered)
    showFullWhiteHeart = true;
  else if (isFavorite && !isHovered)
    showFilledRedHeart = true;
  else
    showOutlinedWhiteHeart = true;


  return (
    <div className={styles.favoritesContainer}>
      <StaticImage
        className={classNames([
          showFilledRedHeart ? styles.favoriteBadge : styles.hidden,
          styles.image,
        ])}
        src={filledRedHeart}
        alt="no favorite heart indicator"
      />
      <StaticImage
        className={classNames([
          showOutlinedWhiteHeart
            ? styles.favoriteBadge
            : styles.hidden,
          styles.image,
        ])}
        src={outlinedWhiteHeart}
        alt="no favorite heart indicator"
      />
      <StaticImage
        className={classNames([
          showFullWhiteHeart
            ? styles.favoriteBadge
            : styles.hidden,
          styles.image,
        ])}
        src={fullWhiteHeart}
        alt="no favorite heart indicator"
      />

    </div>
  );
};

export default FavoriteHeart;
