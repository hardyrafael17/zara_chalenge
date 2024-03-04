import React, { useState, useEffect, createRef, useRef } from 'react';
import * as styles from './Search.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import { useContext } from 'react';
import { HeroContext } from '../../context/HeroProvider';

export const Search = () => {
  const [result, setResult] = useState<any[]>([]);
  const HeroContextValue = useContext(HeroContext);

  const handleChange = (e: any) => {
    e.preventDefault();
    HeroContextValue.setSearchInput(e.target.value);
  }

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
          value={HeroContextValue.searchInput}
          type="text"
          id="search"
          name="search"
          className={styles.searchField}
          placeholder="SEARCH A CHARACTER"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={styles.results}>Results</div>
    </div>
  );
};
export default Search;
