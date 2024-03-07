import React, { useState, useEffect, createRef, useRef } from 'react';
import * as styles from './Search.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import { useContext } from 'react';
import { HeroContext } from '../../context/HeroProvider';
import { useLocation } from '@reach/router';

export const Search = () => {
  const path = useLocation().pathname

  const heroContextValue = useContext(HeroContext);
  const handleChange = (e: any) => {
    e.preventDefault();
    heroContextValue.handleInputChange(e.target.value, path);
  };

  const searchIcon = '../../assets/img/searchIcon.png';

  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <StaticImage
          className={styles.searchIcon}
          src={searchIcon}
          alt="search input field"
        />
        <input
          value={heroContextValue.searchInput}
          type="text"
          id="search"
          name="search"
          className={styles.searchField}
          placeholder="SEARCH A CHARACTER"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={styles.results}>{`${heroContextValue.allHeroes.length} ${
        heroContextValue.allHeroes.length !== 1 ? 'Results' : 'result'
      }`}</div>
    </div>
  );
};
export default Search;
