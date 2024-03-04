import React, { useState, useEffect, createRef, useRef } from 'react';
import * as styles from './Search.module.css';
import { StaticImage } from 'gatsby-plugin-image';

export const Search = () => {
  const [result, setResult] = useState<any[]>([]);

  useEffect(() => {}, []);
  // TODO - favorite state

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
          type="text"
          id="search"
          name="search"
          className={styles.searchField}
          placeholder="SEARCH A CHARACTER"
        />
      </div>
      <div className={styles.results}>Results</div>
    </div>
  );
};
export default Search;
