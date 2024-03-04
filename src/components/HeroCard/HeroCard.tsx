import React, { useState, useEffect, createRef, useRef, useContext } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './HeroCard.module.css';
import { classNames } from 'primereact/utils';
import FavoriteHeart from '../Attribute/FavoriteHeart';
import { GatsbyImage } from 'gatsby-plugin-image';
import {HeroContext } from '../../context/HeroProvider';

export const HeroCard = ({ result }: { result: any }) => {
  const heroContextValue = useContext(HeroContext);

  const isThisFavorite = () => {
    return heroContextValue.favoriteHeroes.some((h) => h.id === result.id);
  };

  const isFavorite = isThisFavorite();

  const marvelRed = false;

  const nameContainerRed = false;

  const handleFavoriteClick = () => {
    console.log(result)
    if (isFavorite) {
      heroContextValue.removeFavorite(result);
    } else {
      heroContextValue.addFavorite(result);
    }
  };

  return (
    <div className={styles.heroCardContainer}>
      <div className={styles.heroCardUpperBody}>
        <img
          className={styles.heroCardImage}
          src={result.thumbnail.path + '.' + result.thumbnail.extension}
          alt={`Hero ${result.name}`}
        />
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
          <p className={styles.heroName}>{result.name}</p>
          <div
            className={styles.favoriteHeartContainer}
            onClick={() => {
              handleFavoriteClick();
            }}
          >
            <FavoriteHeart
              isFavorite={isThisFavorite()}
              isCounter={false}
              favoriteCounter={result}
            />
          </div>
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
