import React, {
  useState,
  useContext,
} from 'react';
import * as styles from './HeroCard.module.css';
import { classNames } from 'primereact/utils';
import FavoriteHeart from '../Attribute/FavoriteHeart';
import { HeroContext } from '../../context/HeroProvider';

export const HeroCard = ({ result }: { result: any }) => {
  const heroContextValue = useContext(HeroContext);
  const [isHovered, setIsHovered] = useState(false);

  const isThisFavorite = () => {
    return heroContextValue.favoriteHeroes.some((h) => h.id === result.id);
  };

  const isFavorite = isThisFavorite();

  const handleFavoriteClick = () => {
    console.log(result);
    if (isFavorite) {
      heroContextValue.removeFavorite(result);
    } else {
      heroContextValue.addFavorite(result);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

      onClick={() => {
        handleFavoriteClick();
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
            isHovered ? styles.heroCardNameContainerHover: ""]
          )}>
          <p className={styles.heroName}>{result.name}</p>
          <div className={styles.favoriteHeartContainer }>
            <FavoriteHeart
              isFavorite={isThisFavorite()}
              isCounter={false}
              favoriteCounter={result}
            />
          </div>
        </div>
        <div className={classNames([styles.borderTriangle])}></div>
      </div>
    </div>
  );
};
export default HeroCard;
