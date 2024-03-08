import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import { useLocation } from '@reach/router';
import Favorites from '../components/Favorites';
import CharacterDetails from '../components/CharacterDetails';
import { HeroContext } from '../context/HeroProvider';

const Index = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const heroProviderValue = React.useContext(HeroContext);

  useEffect(() => {
    if (heroProviderValue.showFavoritesSearch && !showFavorites) {
      setShowFavorites(true);
    }
  }, [heroProviderValue.showFavoritesSearch]);
  return (
    <div>
      {showFavorites && <Favorites />}
      <Search />
      <SearchResults />
      <CharacterDetails />
    </div>
  );
};

export default Index;
