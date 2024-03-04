import React, { useState, useEffect, createRef, useRef } from 'react';
import * as styles from './SearchResults.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import HeroCard from '../HeroCard';

export const SearchResults = () => {
  const [result, setResult] = useState<any[]>([]);

  const mockedResults = []
  for (let i = 0; i < 7; i++) {
    mockedResults.push(i);
  }

  useEffect(() => {}, []);

  const searchIcon = '../../assets/img/searchIcon.png';

  return (
    <div className={styles.mainContainer}>
      {mockedResults.map((result, index) => {
        return <HeroCard key={index} result={result} />;
      })}
    </div>
  );
};
export default SearchResults;
