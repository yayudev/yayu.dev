import styled from "styled-components";
import Link from "next/link";

const Container = styled.footer`
  display: flex;
  padding: 1rem 3%;
  margin-bottom: 1rem;
  justify-content: center;
  font-size: 1.5rem;
  width: 100%;
  color: var(--text-color);
`;

const ButtonLabel = styled.a`
  cursor: pointer;
  margin: 0 2rem;
  color: var(--clickable-link-color);

  &:hover {
    color: var(--active-selection);
  }
`;

export interface BlogPaginationProps {
  prevUrl?: string;
  nextUrl?: string;
}

export function BlogPagination({ prevUrl, nextUrl }: BlogPaginationProps) {
  return (
    <Container>
      {prevUrl && (
        <Link href={prevUrl} passHref>
          <ButtonLabel>Back</ButtonLabel>
        </Link>
      )}

      {prevUrl && nextUrl && <span>|</span>}

      {nextUrl && (
        <Link href={nextUrl} passHref>
          <ButtonLabel>Next</ButtonLabel>
        </Link>
      )}
    </Container>
  );
}
