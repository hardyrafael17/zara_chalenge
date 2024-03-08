import React, { useEffect, useState } from 'react';
import Index from './index';
import Favorites from '../components/Favorites';
import HeroContext from '../context/HeroProvider';

const FavoritesToIndex = () => {
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
      { showFavorites && <Favorites />}
      <Index />
    </>
  );
};

export default FavoritesToIndex;
