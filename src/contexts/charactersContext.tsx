import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

import { ICharacters } from "@/interfaces";

const CharactersContext = createContext<{
  characterData: ICharacters;
  setCharacterData: Dispatch<SetStateAction<ICharacters>>;
}>({
  characterData: {} as ICharacters,
  setCharacterData: () => {},
});

export const CharactersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [characterData, setCharacterData] = useState<ICharacters>(
    {} as ICharacters
  );

  return (
    <CharactersContext.Provider value={{ characterData, setCharacterData }}>
      {children}
    </CharactersContext.Provider>
  );
};

export function useCharacters() {
  const context = useContext(CharactersContext);
  const { characterData, setCharacterData } = context;
  return { characterData, setCharacterData };
}
