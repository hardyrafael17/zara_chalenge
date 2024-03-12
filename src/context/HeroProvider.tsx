import React, {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import axios from 'axios';

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

  const addFavorite = (hero: any) => {
    setFavoriteHeroes([...favoriteHeroes, hero]);
  };

  const removeFavorite = (hero: any) => {
    const favoritesNew = favoriteHeroes.filter((h) => h.id !== hero.id);
    setFavoriteHeroes([...favoritesNew]);
  };

  const handleFavoriteHeroClick = (hero: any) => {
    setCurrentFavoriteHero(hero);
    handleGetHeroComics(hero);
  };

  const handleGetHeroComics = async (hero: any) => {
    setCurrentHeroComics([]);
    if (hero.comics.available > 0 && baseUrl) {
      hero.comics.items.forEach(
        async (comic: { resourceURI: any }, index: number) => {
          if (index < 20)
            axios
              .get(baseUrl, {
                params: {
                  endPoint: 'comic',
                  comicUrl: comic.resourceURI,
                },
              })
              .then((response) => {
                if (response.status === 200 && response.statusText === 'OK') {
                  if (response.data.data.code !== 200) {
                    throw new Error(
                      `Error with the request, status: ${response.data.data.code}, statusText: ${response.data.data.status}`
                    );
                  }
                  const data = response.data.data.data.results;
                  setCurrentHeroComics((prevState) => [...prevState, ...data]);
                } else {
                  throw new Error();
                  // `Error with the request, status: ${response.status}, statusText: ${response.statusText}`
                }
              })
              .catch((error) => {
                console.log(error);
              });
        }
      );
    }
  };

  const searchForHeroes = (searchParam: string) => {
    console.log(baseUrl, 'searching');

    if (baseUrl)
      axios
        .get(baseUrl, {
          params: {
            nameStartsWith: 'spider',
            limit: 50,
            endPoint: 'characters',
          },
        })
        .then((response) => {
          console.log(baseUrl, 'searching');
          if (response.status === 200 && response.statusText === 'OK') {
            if (response.data.data.code !== 200) {
              throw new Error(
                `Error with the request, status: ${response.data.data.code}, statusText: ${response.data.data.status}`
              );
            }
            console.log(baseUrl, 'searching');
            const data = response.data.data.data.results;
            if (data.length > 0) {
              setSearchResults([...data]);
              setAllHeroes([...data]);
            }
          } else {
            console.log(baseUrl, 'searching');
            throw new Error(
              `Error with the request, status: ${response.status}, statusText: ${response.statusText}`
            );
          }
        })
        .catch((error) => {
            console.log(baseUrl, 'searching');
          console.log(error);
        });
  };

  const searchForFavoriteHeroes = (searchParam: string) => {
    const data = favoriteHeroes.filter((hero) => {
      return hero.name.toLowerCase().startsWith(searchParam.toLowerCase());
    });
    setSearchResults(data);
  };

  const handleInputChange = (inputValue: string, location: string) => {
    console.log(inputValue, location, 'inputValue, location')
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
    if (showFavoritesSearch) {
      setSearchResults(favoriteHeroes);
    } else {
      setSearchResults(allHeroes);
    }
  }, [showFavoritesSearch]);

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
