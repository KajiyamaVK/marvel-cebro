import style from "styled-components";
import Image from "next/image";
import { ICharacters } from "@/interfaces";
import { Paper } from "@mui/material";

const Main = style.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: 8px;
  width: 200px;
  height: 250px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

const Description = style(Paper)`
  padding: 1rem;
  background: var(--gray-900);
  color: var(--white);
  width: 100%;
  height: 60px;
  bottom: 00px;
  position: absolute;
  opacity: 0.8;
`;

export default function Card(character: ICharacters) {
  return (
    <Main>
      {character.thumbnail.path && character.thumbnail.extension ? (
        <Image
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt={character.name}
          width={200}
          height={250}
        />
      ) : null}

      <Description elevation={8}>
        <h3>{character.name}</h3>
        <br />
        {character.description}
      </Description>
    </Main>
  );
}
