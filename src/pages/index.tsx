import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import { HeroContext } from '../context/HeroProvider';

const Index = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const heroProviderValue = React.useContext(HeroContext);

  useEffect(() => {
    if (heroProviderValue.showFavoritesSearch && !showFavorites) {
      setShowFavorites(true);
    }
  }, [
    heroProviderValue.showFavoritesSearch,
    heroProviderValue.currentFavoriteHero,
  ]);
  return (
    <>
      <Search />
      <SearchResults />
    </>
  );
};

export default Index;
