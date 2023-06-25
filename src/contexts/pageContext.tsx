// The Page Context holds the state of the page, such as the current endpoint,
//if the page is loading, etc. "Page" here refers to the page that is being
// the actual app page itself. It's not about pagination or something like it

import {
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  createContext,
} from "react";

interface IPageContext {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isInitialLoad: boolean;
  setIsInitialLoad: Dispatch<SetStateAction<boolean>>;
  currentEndPoint: string;
  setCurrentEndPoint: Dispatch<SetStateAction<string>>;
}

export const pageContext = createContext<IPageContext>({
  isLoading: false, // The page is loading. This controls the skeleton loading
  setIsLoading: () => {},
  isInitialLoad: true, // The page is the initial page. This controls the cerebro initial page
  setIsInitialLoad: () => {},
  currentEndPoint: "", // The current endpoint. This keeps strack of the current endpoint so the paginations doesn't lose information mixing other endpoints
  setCurrentEndPoint: () => {},
});

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [currentEndPoint, setCurrentEndPoint] = useState("");

  return (
    <pageContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isInitialLoad,
        setIsInitialLoad,
        currentEndPoint,
        setCurrentEndPoint,
      }}
    >
      {children}
    </pageContext.Provider>
  );
};

export function usePage() {
  const context = useContext(pageContext);
  const {
    isLoading,
    setIsLoading,
    isInitialLoad,
    setIsInitialLoad,
    currentEndPoint,
    setCurrentEndPoint,
  } = context;
  return {
    isLoading,
    setIsLoading,
    isInitialLoad,
    setIsInitialLoad,
    currentEndPoint,
    setCurrentEndPoint,
  };
}
