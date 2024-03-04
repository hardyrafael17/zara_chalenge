import React, {
  ReactNode,
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

import axios from 'axios';

const defaultState = {
  allHeroes: [] as string[],
  favoriteHeroes: [] as string[],
  searchInput: '',
  setSearchInput: undefined as unknown as Dispatch<SetStateAction<string>>,
};

interface Props {
  children: ReactNode;
}

export const HeroContext = createContext(defaultState);

export const HeroProvider: React.FC<Props> = ({ children }) => {
  const [allHeroes, setAllHeroes] = useState<string[]>([]);
  const [favoriteHeroes, setFavoriteHeroes] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState('');

  const searchForHeroes = (searchInput: string) => {};
  useEffect(() => {
    axios
      // .get('https://zara-chalenge.netlify.app/.netlify/functions/get-marvel-characters')
      .get('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&apikey=f3c16bcc557f4d4006b0806b54190952')
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [searchInput]);

  return (
    <HeroContext.Provider
      value={{
        allHeroes,
        favoriteHeroes,
        searchInput,
        setSearchInput,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroContext;
