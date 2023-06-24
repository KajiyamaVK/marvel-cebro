import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Marvel } from "next/font/google";
import Topbar from "@/components/Topbar";
import { CharactersProvider } from "@/contexts/charactersContext";
import { PageProvider } from "@/contexts/pageContext";
import { SearchProvider } from "@/contexts/searchResultsContext";

const text = Marvel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={text.className}>
      <CharactersProvider>
        <SearchProvider>
          <PageProvider>
            <Topbar />
            <Component {...pageProps} />
          </PageProvider>
        </SearchProvider>
      </CharactersProvider>
    </div>
  );
}
