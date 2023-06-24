import styled from "styled-components";
import { useEffect, useState } from "react";
import Card from "./Card";
import { ISearchResult } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";
import Pagination from "@mui/material/Pagination";
import { getCharacters } from "@/functions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCharacters } from "@/contexts/charactersContext";
import { ICharacters } from "@/interfaces";
import { usePage } from "@/contexts/pageContext";
import { useSearchContext } from "@/contexts/searchResultsContext";

const Main = styled.div`
  background: var(--background-component-color);
  border-radius: 8px;
  padding: 2.5rem;
`;

const CardsList = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Title = styled.h2`
  border-bottom: 1px solid var(--gray-400);
`;

interface ResultsPanelProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function ResultsPanel({ page, setPage }: ResultsPanelProps) {
  const [pageCount, setPageCount] = useState(0);
  const { isLoading, setIsLoading } = usePage();
  const { charactersResult, setCharactersResult } = useSearchContext();

  const { setCharacterData } = useCharacters();

  useEffect(() => {
    if (charactersResult) {
      const pageCount = Math.ceil(charactersResult.total / 20);
      setPageCount(pageCount);
    }
  }, [charactersResult]);

  async function handlePageChange(
    event: React.ChangeEvent<unknown>,
    pageNumber: number
  ) {
    setIsLoading(true); // Turns on skeleton loading
    setPage(pageNumber);

    const characters = await getCharacters({
      offset: pageNumber === 1 ? 0 : pageNumber * 10,
      currentEndPoint: charactersResult?.endpoint,
    });
    setCharactersResult(characters);
    setIsLoading(false);
  }

  return (
    <Main>
      <div>
        <Title>Foram encontrados {charactersResult?.total} super humanos</Title>
        <Pagination
          count={pageCount}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#ffffff",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "white",
              color: "var(--gray-900)",
            },
            "& .MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "var(--white)",
              color: "var(--gray-900)",
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "var(--white)",
              color: "var(--gray-900)",
            },
            margin: "1rem auto",
            width: "fit-content",
          }}
        />
      </div>

      {charactersResult && charactersResult.results && (
        <CardsList>
          {charactersResult.results.map((character: ICharacters) => (
            <div
              key={character.id}
              onClick={() => {
                setCharacterData(character);
              }}
            >
              <Card {...character} />
            </div>
          ))}
        </CardsList>
      )}
      {isLoading && (
        <CardsList>
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                key={index}
                style={{ borderRadius: "8px" }}
                height={300}
                width={200}
              />
            ))}
        </CardsList>
      )}
    </Main>
  );
}
