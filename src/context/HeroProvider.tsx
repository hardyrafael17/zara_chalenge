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
      .get('http://localhost:8888/.netlify/functions/get-marvel-characters')
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
