import logo from "public/logo.png";
import styled from "styled-components";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { useSearchContext } from "@/contexts/searchResultsContext";
import { usePage } from "@/contexts/pageContext";
import { getCharacters } from "../functions";
import TextField from "@mui/material/TextField";

const Main = styled.aside`
  background: var(--gray-800);
  border-radius: 8px;
  margin-top: 4rem;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--white);
  width: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 100px;
    margin-bottom: 20px;
    border: none;
    outline: none;
  }
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

const Input = styled(TextField)`
  width: clamp(200px, 80%, 400px);
  margin: 1.5rem;
  .MuiOutlinedInput-root {
    border-radius: 8px;
    background: var(--gray-700);
    color: var(--gray-100);
    &.Mui-focused {
      background: var(--gray-600);
    }
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: var(--gray-100);
  }
  .MuiInputLabel-root {
    color: var(--gray-100);
    &.Mui-focused {
      color: var(--gray-100);
    }
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  &:hover .MuiOutlinedInput-notchedOutline {
    border: 2px solid var(--gray-100);
  }
`;

interface FiltersAreaProps {
  setPage: Dispatch<SetStateAction<number>>;
}

export default function FiltersArea({ setPage }: FiltersAreaProps) {
  const {
    setIsInitialLoad,
    setIsLoading,
    setCurrentEndPoint,
    currentEndPoint,
  } = usePage();
  const [nameInput, setNameInput] = useState("" as string);
  const { setCharactersResult } = useSearchContext();

  async function handleSearch() {
    setIsLoading(true); // Turns on skeleton loading
    setCurrentEndPoint("" as string);
    const characters = await getCharacters({
      offset: 0,
      nameInput: nameInput,
      currentEndPoint: currentEndPoint,
    });

    setIsLoading(false);
    setIsInitialLoad(false); // Removes the cerebro initial page
    setPage(1);
    setCharactersResult(characters);
  }

  return (
    <Main>
      <Header>
        <Logo src={logo} alt="Image of Cerebro" />

        <Title>Filtros</Title>
        <Subtitle>Preencha os atributos abaixo e clique em procurar</Subtitle>
      </Header>
      <Input
        variant="outlined"
        label="Buscar pelo nome"
        value={nameInput}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNameInput(event.target.value)
        }
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") handleSearch();
        }}
      />
      <Footer>
        <Button onClick={handleSearch}>Buscar</Button>
      </Footer>
    </Main>
  );
}
