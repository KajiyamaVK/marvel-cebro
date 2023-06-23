import style from "styled-components";

const Main = style.div`
  background: var(--white);
  border-radius: 8px;
  width: 200px;
  height: 300px;
`;

export default function Card() {
  return (
    <Main>
      <h1>Card</h1>
    </Main>
  );
}
