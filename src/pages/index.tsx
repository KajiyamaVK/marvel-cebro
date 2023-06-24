import Head from "next/head";
import styled from "styled-components";
import FiltersArea from "@/components/FiltersArea";
import ResultsPanel from "@/components/ResultsPanel";
import { useState, useEffect } from "react";
import DialogCharacterInfo from "@/components/DialogCharacterInfo";
import { SkeletonTheme } from "react-loading-skeleton";
import { useCharacters } from "@/contexts/charactersContext";
import { usePage } from "@/contexts/pageContext";
import InitialResultsPanel from "@/components/InitialResultsPanel";

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;
`;

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const { characterData } = useCharacters();
  const { isInitialLoad } = usePage();

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (Object.keys(characterData).length !== 0) {
      setIsDialogOpen(true);
    } else {
      setIsDialogOpen(false);
    }
  }, [characterData]);

  return (
    <>
      <Head>
        <title>Marvel Cerebro</title>
        <meta
          name="description"
          content="Uso do Cerebro via requisições HTTP"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Wrapper>
          <FiltersArea setPage={setPage} />
          {isInitialLoad ? (
            <InitialResultsPanel />
          ) : (
            <ResultsPanel page={page} setPage={setPage} />
          )}
        </Wrapper>
      </SkeletonTheme>
      <DialogCharacterInfo open={isDialogOpen} data={characterData} />
    </>
  );
}
