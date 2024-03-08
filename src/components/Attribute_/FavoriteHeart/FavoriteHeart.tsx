import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect, createRef, useRef } from 'react';
import * as styles from './FavoriteHeart.module.css';
import { classNames } from 'primereact/utils';

const FavoriteHeart = ({isFavorite = false, isCounter = false, favoriteCounter }: 
{isFavorite: boolean, isCounter: boolean, favoriteCounter: number}) => {

  const outlinedWhiteHeart = '../../../assets/img/outlinedWhiteHeart.png';
  const filledRedHeart = '../../../assets/img/redHeart.png';


  return (
      <div className={styles.favoritesContainer}>
        <StaticImage
          className={classNames([
          isFavorite ?  styles.favoriteBadge : styles.hidden,
          styles.image
        ])}
          src={filledRedHeart}
          alt="no favorite heart indicator"
        />
        <StaticImage
          className={classNames([
          !isFavorite ?  styles.favoriteBadge : styles.hidden,
          styles.image
          ])}
          src={outlinedWhiteHeart}
          alt="no favorite heart indicator"
        />
      </div>
  )
}

export default FavoriteHeart;
