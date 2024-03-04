import React, { useState, useEffect, createRef, useRef, useContext } from 'react';
import * as styles from './SearchResults.module.css';
import HeroCard from '../HeroCard';
import HeroContext from '../../context/HeroProvider';

export const SearchResults = () => {

  const heroes = useContext(HeroContext).searchResults;

  return (
    <div className={styles.mainContainer}>
      {heroes.map((result, index) => {
        return <HeroCard key={index} result={result} />;
      })}
    </div>
  );
};
export default SearchResults;
