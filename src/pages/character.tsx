import React, { useContext } from 'react';
import * as styles from './character.module.css';
// import HeroContext from '../../context/HeroProvider';
import HeroContext from '../context/HeroProvider';
import { navigate } from 'gatsby';

export const CharacterDetails = () => {
  const result = useContext(HeroContext).currentFavoriteHero;
  // if (!result) {
  //   navigate('/');
  // }
  const heroProviderValue = useContext(HeroContext);
  return (
    <div>
      {result ? (
        <div>
          <div className={styles.flexContainer}>
            <div className={styles.imageDescriptionContainer}>
              <div className={styles.imageContainerCharacter}>
                <div className={styles.imageFlexItem}>
                  <img
                    className={styles.heroCardImage}
                    src={
                      result.thumbnail.path + '.' + result.thumbnail.extension
                    }
                    alt={`Hero ${result.name}`}
                  />
                </div>
              </div>
              <div className={styles.descriptionContainer}>
                <div className={styles.titleContainerCharacter}>
                  <h1 className={styles.mainTitle}>{result.name}</h1>
                </div>
                <p className={styles.mainDescription}>{`${
                  result.description.length
                    ? result.description
                    : 'No description'
                }`}</p>
              </div>
            </div>
            <div className={styles.bottomRightTriangle}></div>
          </div>
          <div>
            <h2 className={styles.h2Title}>
              {heroProviderValue.currentHeroComics.length ? 'Comics' : ''}
            </h2>
            <ul>
              {heroProviderValue.currentHeroComics.map(
                (comic: any, index: number) => {
                  return (
                    <li key={index} className={styles.comic}>
                      <div className={styles.comicImag}>
                        <img
                          className={styles.mainImage}
                          alt="Comic Image"
                          src={
                            comic.thumbnail.path +
                            '.' +
                            comic.thumbnail.extension
                          }
                        />
                      </div>
                      <div>
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default CharacterDetails;
