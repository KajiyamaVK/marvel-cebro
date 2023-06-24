import logo from "public/logo.png";
import styled from "styled-components";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { useSearchContext } from "@/contexts/searchResultsContext";
import { usePage } from "@/contexts/pageContext";
import { getCharacters } from "../functions";

const Main = styled.aside`
  background: var(--gray-800);
  border-radius: 8px;
  margin-top: 4rem;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--white);
`;

const Logo = styled(Image)`
  box-sizing: initial;
  width: 8rem;
  height: 8rem;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  align-items: center;
  margin-top: calc(0px - 1.5rem - 6px);
  z-index: 1;
  bottom: 30px;
  position: relative;
`;

const Footer = styled.footer`
  display: flex;
  gap: 1rem;
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;
  justify-content: center;
  padding: 1rem 0;
`;
const Button = styled.button`
  background: transparent;
  color: var(--white);
  border: 1px solid var(--white);
  border-radius: 8px;
  height: 58px;
  padding: 0 1.5rem;
  font-weight: bold;
  display: block;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: color 0.1s, background-color 0.1s;
  &:hover {
    background: var(--white);
    color: var(--gray-900);
  }
`;

const Title = styled.h1`
  color: var(--gray-100);
  line-height: 1.6rem;
`;

const Subtitle = styled.p`
  margin-top: 1rem;
  color: var(--gray-100);
  line-height: 1.6rem;
`;

interface FiltersAreaProps {
  setPage: Dispatch<SetStateAction<number>>;
}

export default function FiltersArea({ setPage }: FiltersAreaProps) {
  const { setIsInitialLoad, setIsLoading } = usePage();
  const { setCharactersResult } = useSearchContext();

  async function handleSearch() {
    setIsLoading(true);
    const characters = await getCharacters();
    setIsLoading(false);
    console.log(characters);
    setIsInitialLoad(false);

    setCharactersResult(characters);
    setPage(1);
  }

  return (
    <Main>
      <Header>
        <Logo src={logo} alt="Image of Cerebro" />

        <Title>Filtros</Title>
        <Subtitle>Preencha os atributos abaixo e clique em procurar</Subtitle>
      </Header>

      <Footer>
        <Button onClick={handleSearch}>Buscar</Button>

        <Button>Limpar</Button>
      </Footer>
    </Main>
  );
}
