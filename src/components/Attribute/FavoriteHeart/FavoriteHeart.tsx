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
          src={outlinedWhiteHeart}
          alt="favorites heart indicator"
        />
        <StaticImage
          className={classNames([
          !isFavorite ?  styles.favoriteBadge : styles.hidden,
          styles.image
          ])}
          src={filledRedHeart}
          alt="favorites heart indicator"
        />
        <div className={styles.counter}>?</div>
      </div>
  )
}

export default FavoriteHeart;
