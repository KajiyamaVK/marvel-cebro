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
  isLoading: false,
  setIsLoading: () => {},
  isInitialLoad: true,
  setIsInitialLoad: () => {},
  currentEndPoint: "",
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
