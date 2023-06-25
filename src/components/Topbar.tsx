// The topbar component that is shown on the top of the page.

import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  background: var(--background-component-color);
  color: var(--foreground-color);
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
      <Link href="/">
        <p>O Cerebro</p>
      </Link>
    </Container>
  );
}
