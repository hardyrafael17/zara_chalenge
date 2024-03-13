import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import FavoritesText from '../components/FavoritesText';
import HeroContext from '../context/HeroProvider';

const Favorites = () => {
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
      {showFavorites && <FavoritesText />}
      <Search />
      <SearchResults />
    </>
  );
};

export default Favorites;
