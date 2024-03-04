import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import * as styles from './index.module.css';
import SearchResults from '../components/SearchResults';
import { useLocation } from '@reach/router';

const Index = () => {
  const location = useLocation();
  return (
    <div className={styles.mainBody}>
      <Search />
      <SearchResults />
    </div>
  );
};

export default Index;
