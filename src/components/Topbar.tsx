import styled from "styled-components";
import logo from "/public/logo.png";
import Image from "next/image";

const Container = styled.div`
  background: var(--gray-800);
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
  align-items: center;
  font-size: 1.5rem;
  gap: 1rem;
`;

export default function Topbar() {
  return (
    <Container>
      <Image src={logo} alt="Marvel Cerebro" width={32} height={32} />
      <p>Marvel Cerebro</p>
    </Container>
  );
}
