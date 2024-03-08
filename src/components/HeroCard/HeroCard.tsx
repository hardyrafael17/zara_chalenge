import React, { useState, useContext } from 'react';
import * as styles from './HeroCard.module.css';
import { classNames } from 'primereact/utils';
import FavoriteHeart from '../FavoriteHeart';
import { HeroContext } from '../../context/HeroProvider';
import { navigate } from 'gatsby';

export const HeroCard = ({ result }: { result: any }) => {
  const heroContextValue = useContext(HeroContext);
  const [isHovered, setIsHovered] = useState(false);

  const isThisFavorite = () => {
    return heroContextValue.favoriteHeroes.some((h) => h.id === result.id);
  };

  const isFavorite = isThisFavorite();

  const handleFavoriteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    if (isFavorite) {
      heroContextValue.removeFavorite(result);
    } else {
      heroContextValue.addFavorite(result);
    }
  };
  const handleCardClick = () => {
    heroContextValue.handleFavoriteHeroClick(result);
    navigate('/character');
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        handleCardClick();
      }}
      className={styles.heroCardContainer}
    >
      <div className={styles.heroCardUpperBody}>
        <img
          className={styles.heroCardImage}
          src={result.thumbnail.path + '.' + result.thumbnail.extension}
          alt={`Hero ${result.name}`}
        />
      </div>
      <div className={classNames([styles.heroCardLowerBody])}>
        <div
          className={classNames([
            styles.heroCardNameContainer,
            isHovered ? styles.heroCardNameContainerHover : '',
          ])}
        >
          <p className={
            classNames([
              styles.heroName,
              isHovered ? styles.heroNameHover : '',
            ])
            }>{result.name}</p>
          <div
            onClick={(e) => {
              handleFavoriteClick(e);
            }}
            className={styles.favoriteHeartContainer}
          >
            <FavoriteHeart
              isFavorite={isThisFavorite()}
              isCounter={false}
              favoriteCounter={result}
              isHovered={isHovered}
            />
          </div>
        </div>
        <div className={classNames([styles.borderTriangle])}></div>
      </div>
    </div>
  );
};
export default HeroCard;
