import React, { useContext } from 'react';
import * as styles from './CharacterDetails.module.css';
import HeroContext from '../../context/HeroProvider';

export const CharacterDetails = () => {
  const result = useContext(HeroContext).currentFavoriteHero;

  const heroProviderValue = useContext(HeroContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.detailsContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.imageDescriptionContainer}>
            <div className={styles.imageContainer}>
              <div className={styles.imageFlexItem}>
                <img
                  className={styles.heroCardImage}
                  src={result.thumbnail.path + '.' + result.thumbnail.extension}
                  alt={`Hero ${result.name}`}
                />
              </div>
            </div>
            <div className={styles.descriptionContainer}>
              <h1 className={styles.mainTitle}>{result.name}</h1>
              <p className={styles.mainDescription}>{result.description}</p>
            </div>
          </div>
          <div className={styles.bottomRightTriangle}></div>
        </div>
        <div className={styles.comicsContainer}>
          <h2 className={styles.h2Title}>Comics</h2>
          <ul>
            {heroProviderValue.currentHeroComics.map(
              (comic: any, index: number) => {
                return (
                  <li key={index} className={styles.comic}>
                    <div className={styles.comicImag}>
                      <img
                        className={styles.mainImge}
                        alt="Comic Image"
                        src={
                          comic.thumbnail.path + '.' + comic.thumbnail.extension
                        }
                      />
                    </div>
                    <div className={styles.comicDescriptionContainer}>
                      <p className={styles.comicDescriptionText}>
                        {comic.description}
                      </p>
                      <p className={styles.comicDescriptionYear}>
                        {new Date(comic.dates[0].date).getFullYear()}
                      </p>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
