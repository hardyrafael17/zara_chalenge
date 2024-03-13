import { useLocation } from '@reach/router';
import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

export const defaultState = {
  allHeroes: [] as string[],
  favoriteHeroes: [] as any[],
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
  handleFavoriteHeroClick: (hero: any) => {
    hero;
  },
  currentFavoriteHero: false as any,
  currentHeroComics: [] as any[],
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
  const [currentFavoriteHero, setCurrentFavoriteHero] = useState<any>(false);
  const [currentHeroComics, setCurrentHeroComics] = useState<any[]>([]);
  const baseUrl = process.env.GATSBY_MARVEL_API_URL;
  const path = useLocation().pathname;

  const addFavorite = (hero: any) => {
    setFavoriteHeroes([...favoriteHeroes, hero]);
  };

  const removeFavorite = (hero: any) => {
    const favoritesNew = favoriteHeroes.filter((h) => h.id !== hero.id);
    setFavoriteHeroes([...favoritesNew]);
  };

  const handleFavoriteHeroClick = (hero: any) => {
    setCurrentFavoriteHero(hero);
    // handleGetHeroComics(hero);
  };

  const searchForHeroes = (searchParam: string) => {
    if (baseUrl) {
      const url = new URL(baseUrl);
      url.search = new URLSearchParams({
        nameStartsWith: searchParam,
        limit: '50',
        endPoint: 'characters',
      });
      url.toString();

      fetch(url.toString())
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Error with the request, status: ${response.status}, statusText: ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((data) => {
          if (data.data.code !== 200) {
            throw new Error(
              `Error with the request, status: ${data.data.code}, statusText: ${data.data.status}`
            );
          }
          const results = data.data.data.results;
          if (results.length > 0) {
            setSearchResults([...results]);
            setAllHeroes([...results]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const searchForFavoriteHeroes = (searchParam: string) => {
    const data = favoriteHeroes.filter((hero) => {
      return hero.name.toLowerCase().startsWith(searchParam.toLowerCase());
    });
    setSearchResults(data);
  };

  const handleInputChange = (inputValue: string, location: string) => {
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

  useEffect(() => {
    setSearchInput('');
    if (path.includes('favorites')) {
      setShowFavoritesSearch(true);
      setSearchResults(favoriteHeroes);
    } else {
      setSearchResults(allHeroes);
      setShowFavoritesSearch(false);
    }
  }, [path])

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
        handleFavoriteHeroClick,
        currentFavoriteHero: currentFavoriteHero,
        currentHeroComics: currentHeroComics,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroContext;
