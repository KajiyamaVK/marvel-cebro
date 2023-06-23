import Head from "next/head";
import styled from "styled-components";
import FiltersArea from "@/components/FiltersArea";
import ResultsPanel from "@/components/ResultsPanel";

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
      <Wrapper>
        <FiltersArea />
        <ResultsPanel />
      </Wrapper>
    </>
  );
}
