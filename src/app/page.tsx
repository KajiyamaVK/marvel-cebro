'use client';

import FiltersArea from './components/FiltersArea';
import ResultsPanel from './components/ResultsPannel';
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;`;

export default function Home() {
  
  return (
    <Wrapper>
      <FiltersArea />
      <ResultsPanel />
    </Wrapper>
  )
}
