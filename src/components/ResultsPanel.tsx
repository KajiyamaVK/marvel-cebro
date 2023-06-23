import styled from "styled-components";
import Card from "./Card";
import { ICharacters } from "@/interfaces";

const Main = styled.div`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
`;

const CardsList = styled.div`
  padding: 2rem 0;
  display: flex;
  gap: 2rem;
`;

const Title = styled.h2`
  border-bottom: 1px solid var(--gray-400);
`;

interface ResultsPanelProps {
  charactersResult: ICharacters[];
}

export default function ResultsPanel({ charactersResult }: ResultsPanelProps) {
  return (
    <Main>
      <Title>Super humanos encontrados:</Title>
      <CardsList>
        <Card />
        <Card />
        <Card />
      </CardsList>
    </Main>
  );
}
