import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

import axios from 'axios';
import { useLocation } from '@reach/router';

const defaultState = {
  allHeroes: [] as string[],
  favoriteHeroes: [] as string[],
  searchResults: [] as string[],
  searchInput: '',
  setSearchInput: undefined as unknown as Dispatch<SetStateAction<string>>,
  handleInputChange: (e: string, location: string) => {
    e;
    location;
  },
  addFavorite: (hero: any) => {
    hero;
  },
  removeFavorite: (hero: any) => {
    hero;
  },
  showFavoritesSearch: false,
  showCharacterDetails: false,
  setShowFavoritesSearch: undefined as unknown as Dispatch<
    SetStateAction<boolean>
  >,
  setShowCharacterDetails: undefined as unknown as Dispatch<
    SetStateAction<boolean>
  >,
};

interface Props {
  children: ReactNode;
}

export const HeroContext = createContext(defaultState);

export const HeroProvider: React.FC<Props> = ({ children }) => {
  const [allHeroes, setAllHeroes] = useState<string[]>([]);
  const [favoriteHeroes, setFavoriteHeroes] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [showFavoritesSearch, setShowFavoritesSearch] = useState(false);
  const [showCharacterDetails, setShowCharacterDetails] = useState(false);
  const location = useLocation().pathname;

  const addFavorite = (hero: any) => {
    setFavoriteHeroes([...favoriteHeroes, hero]);
  };

  const removeFavorite = (hero: any) => {
    const favoritesNew = favoriteHeroes.filter((h) => h.id !== hero.id);
    setFavoriteHeroes([...favoritesNew]);
  };

  const searchForHeroes = (searchParam: string) => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchParam}&limit=50&apikey=f3c16bcc557f4d4006b0806b54190952`
      )
      .then((response) => {
        if (response.status === 200 && response.statusText === 'OK') {
          const data = response.data.data.results;
          if (data.length > 0) {
            setSearchResults([...data]);
            setAllHeroes([...data]);
          }
        } else {
          throw new Error(
            `Error with the request, status: ${response.status}, statusText: ${response.statusText}`
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchForFavoriteHeroes = (searchParam: string) => {
    const data = favoriteHeroes.filter((hero) => {
      return hero.name.toLowerCase().startsWith(searchParam.toLowerCase());
    });
    setSearchResults(data);
  };

  const handleInputChange = (inputValue: string, localtion: string) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setSearchInput(inputValue);

    // Set a new timeout to perform the search after 3 seconds of inactivity
    if (showFavoritesSearch) {
      searchForFavoriteHeroes(inputValue);
    } else {
      setTypingTimeout(
        setTimeout(() => {
          // Perform search operation here (e.g., call an API with the query)
          searchForHeroes(inputValue);
          // For demonstration, let's just set some dummy search results
        }, 1000)
      );
    }
  };

  useEffect (() => {
    if (showFavoritesSearch) {
      setSearchResults(favoriteHeroes);
    } else {
      setSearchResults(allHeroes);
    }

  },[showFavoritesSearch])

  return (
    <HeroContext.Provider
      value={{
        searchResults: searchResults,
        allHeroes,
        favoriteHeroes,
        searchInput,
        setSearchInput: setSearchInput,
        handleInputChange: handleInputChange,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
        setShowFavoritesSearch: setShowFavoritesSearch,
        setShowCharacterDetails: setShowCharacterDetails,
        showFavoritesSearch,
        showCharacterDetails,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroContext;
