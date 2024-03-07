import React, { useContext } from 'react';
import * as styles from './CharacterDetails.module.css';
import { classNames } from 'primereact/utils';
import HeroContext from '../../context/HeroProvider';

export const CharacterDetails = () => {
  const heroProviderValue = useContext(HeroContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.detailsContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageFlexItem}>
              <img className={styles.mainImge} alt="test" src="image.jpg" />
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h1 className={styles.mainTitle}>Hero title</h1>
            <p className={styles.mainDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.bottomRightTriangle}></div>
        </div>
        <div className={styles.comicsContainer}>
          <h2 className={styles.h2Title}>Comics</h2>
          <ul>
            <li className={styles.comic}>
              <div className={styles.comicImag}>
                <img className={styles.mainImge} alt="test" src="image.jpg" />
              </div>
              <div>
                <p className={styles.comicDescriptionText}>Description</p>
                <p className={styles.comicDescriptionYear}>Year</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
