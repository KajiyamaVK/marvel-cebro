import styled from "styled-components";

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
      <p>O Cerebro</p>
    </Container>
  );
}
