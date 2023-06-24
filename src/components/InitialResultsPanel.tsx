import styled from "styled-components";
import cerebroImg from "/public/cerebro.png";
import Image from "next/image";

const Main = styled.div`
  background: var(--gray-800);
  border-radius: 8px;
`;

const Title = styled.h2`
  border-bottom: 1px solid var(--gray-400);
  padding: 1rem;
`;

const Cerebro = styled(Image)`
  margin: 0 auto;
  display: block;
  opacity: 1;
  width: 100%;
  height: auto;
`;

const Text = styled.p`
  padding: 1rem;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
`;

export default function InitialResultsPanel() {
  return (
    <Main>
      <Title>O Cérebro</Title>
      <Cerebro src={cerebroImg} alt="Cerebro" />
      <Text>
        {'"'}Cerebro... a criação do Xavier. Uma máquina capaz de detectar
        indivíduos em todo o mundo. Com ela, Xavier pode encontrar e recrutar
        novos membros para seus X-Men. Mas também pode ser usada para localizar
        seus inimigos. É uma arma poderosa nas mãos de um telepata experiente
        como Xavier. Mas nas mãos erradas... pode ser uma ameaça para todos os
        mutantes.{'"'}
        <br />
        <br />
        <i style={{ textAlign: "end", justifyContent: "flex-end" }}>Magneto</i>
      </Text>
    </Main>
  );
}
