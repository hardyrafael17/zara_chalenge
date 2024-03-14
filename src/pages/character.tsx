import React, { useContext, useEffect, useState } from 'react';
import * as styles from './character.module.css';
import axios from 'axios';
import { HeroContext } from '../context/HeroProvider';
import { navigate, useLocation } from '@reach/router';

export const CharacterDetails = () => {
  const result = useContext(HeroContext).currentFavoriteHero;
  const [currentHeroComics, setCurrentHeroComics] = useState<any[]>([]);
  const [comicsTitle, setComicsTitle] = useState<string>('');
  const baseUrl = process.env.GATSBY_MARVEL_API_URL;
  const path = useLocation().pathname;

  useEffect(() => {
    if (!result) {
      navigate('/');
    }
  }, []);

  const handleGetHeroComics = async (hero: any) => {
    if (!result) return;
    setCurrentHeroComics([]);
    if (hero.comics.available > 0 && baseUrl) {
      hero.comics.items.forEach(
        async (comic: { resourceURI: any }, index: number) => {
          if (index < 20)
            axios
              .get(baseUrl, {
                params: {
                  endPoint: 'comic',
                  comicUrl: comic.resourceURI,
                },
              })
              .then((response) => {
                if (response.status === 200 && response.statusText === 'OK') {
                  if (response.data.data.code !== 200) {
                    throw new Error(
                      `Error with the request, status: ${response.data.data.code}, statusText: ${response.data.data.status}`
                    );
                  }
                  const data = response.data.data.data.results;
                  if (comicsTitle === 'Fetching comics...')
                    setComicsTitle('Comics');

                  setCurrentHeroComics((prevState) => [...prevState, ...data]);
                } else {
                  console.log("Response", response) 
                  throw new Error();
                }
              })
              .catch((error) => {
                console.log(error);
              });
        }
      );
    }
  };

  useEffect(() => {
    if (
      path.includes('character') &&
      Object.hasOwnProperty.call(result, 'id') &&
      result.comics.available > 0
    ) {
      setComicsTitle('Fetching comics...');
      handleGetHeroComics(result);
    } else {
      setComicsTitle('No comics available');
    }
  }, [path]);

  return (
    <>
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
                    : 'No description found'
                }`}</p>
              </div>
            </div>
            <div className={styles.bottomRightTriangle}></div>
          </div>
          <div>
            <h2 className={styles.h2Title}>{comicsTitle}</h2>
            <ul>
              {currentHeroComics.map((comic: any, index: number) => {
                return (
                  <li key={index} className={styles.comic}>
                    <div className={styles.comicImag}>
                      <img
                        className={styles.mainImage}
                        alt="Comic Image"
                        src={
                          comic.thumbnail.path + '.' + comic.thumbnail.extension
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
              })}
            </ul>
          </div>
        </div>
      ) : (
        <p>Ooops!</p>
      )}
    </>
  );
};

export default CharacterDetails;
