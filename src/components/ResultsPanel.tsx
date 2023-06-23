import styled from "styled-components";
import Card from "./Card";

const Main = styled.div`
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
`;

const Title = styled.h2`
  border-bottom: 1px solid var(--gray-400);
`;

export default function ResultsPanel() {
  return (
    <Main>
      <Title>Super humanos encontrados:</Title>
      <Card />
    </Main>
  );
}
