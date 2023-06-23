'use client'

import logo from "public/logo.png";
import styled from 'styled-components'
import Image from "next/image";

const Main = styled.aside`
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--white);
`;

const Logo = styled(Image)`
  box-sizing: initial;
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--green-500);
`

const Cover  = styled(Image)`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  align-items: center;
  margin-top: calc(0px - 1.5rem - 6px);
`;

const Footer = styled.footer`
  display: flex;
  gap: 1rem;
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;
  justify-content: center;
  padding: 1rem 0;`
  ;


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
  margin-top: 1rem;
  color: var(--gray-100);
  line-height: 1.6rem;
  `

const Subtitle = styled.p`
  margin-top: 1rem;
  color: var(--gray-100);
  line-height: 1.6rem;
  `



export default function Sidebar() {
  return (
    <Main>
      <Cover
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt="cover"
        object-fit="cover"
        width={100}
        height={100}
      />
      <Header>
        <Logo src={logo} alt="Image of Cerebro"/>

        <Title >Filtros</Title>
        <Subtitle>Preencha os atributos abaixo e clique em procurar</Subtitle>
      </Header>

      <Footer>
        <Button>
          Buscar
        </Button>

        <Button>
          Limpar
        </Button>
      </Footer>
    </Main>
  );
}
