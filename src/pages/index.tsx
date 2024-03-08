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
  console.log(heroProviderValue.currentFavoriteHero);

  useEffect(() => {
    console.log(heroProviderValue.currentFavoriteHero)
    if (heroProviderValue.showFavoritesSearch && !showFavorites) {
      setShowFavorites(true);
    }
  }, [heroProviderValue.showFavoritesSearch, heroProviderValue.currentFavoriteHero]);
  return (
    <div>
      {showFavorites && <Favorites />}
      <Search />
      <SearchResults />
      { heroProviderValue.currentFavoriteHero && <CharacterDetails />}
    </div>
  );
};

export default Index;
