import React, { useState, useEffect, createRef, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './HeroCard.module.css';
import { classNames } from 'primereact/utils';
import FavoriteHeart from '../Attribute/FavoriteHeart';

export const HeroCard = ({ result }: { result: number }) => {
  const [cardProps, setCardProps] = useState<any[]>([]);

  useEffect(() => {}, []);

  const searchIcon = '../../assets/img/searchIcon.png';
  const marvelRed = false;
  const nameContainerRed = false;

  return (
    <div className={styles.heroCardContainer}>
      <div className={styles.heroCardUpperBody}>
        <div className={styles.upperBodyLowerBar}></div>
      </div>
      <div
        className={classNames([
          styles.herCardLowerBody,
          marvelRed ? styles.backgroundRed : styles.backgroundBlack,
        ])}
      >
        <div
          className={classNames([
            styles.heroCardNameContainer,
            marvelRed ? styles.backgroundRed : styles.backgroundBlack,
          ])}
        >
          <p className={styles.heroName}>Hero Name</p>
          <FavoriteHeart
            isFavorite={true}
            isCounter={true}
            favoriteCounter={result}
          />
        </div>
      </div>
      <div className={styles.heroCardFooter}>
        <div
          className={classNames([
            styles.rectangle,
            marvelRed ? styles.backgroundRed : styles.backgroundBlack,
          ])}
        ></div>
        <div
          className={classNames([
            styles.triangle,
            marvelRed ? styles.borderRed : styles.boaderBlack,
          ])}
        ></div>
      </div>
    </div>
  );
};
export default HeroCard;
