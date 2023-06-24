import {
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  createContext,
} from "react";
import { ISearchResult } from "@/interfaces";
import { ICharacters } from "@/interfaces";

interface ISearchResultContext {
  charactersResult: ISearchResult;
  setCharactersResult: Dispatch<SetStateAction<ISearchResult>>;
}

export const searchContext = createContext<ISearchResultContext>({
  charactersResult: {} as ISearchResult,
  setCharactersResult: () => {},
});

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [charactersResult, setCharactersResult] = useState<ISearchResult>(
    {} as ISearchResult
  );

  return (
    <searchContext.Provider value={{ charactersResult, setCharactersResult }}>
      {children}
    </searchContext.Provider>
  );
};

export function useSearchContext() {
  const context = useContext(searchContext);
  const { charactersResult, setCharactersResult } = context;
  return { charactersResult, setCharactersResult };
}
