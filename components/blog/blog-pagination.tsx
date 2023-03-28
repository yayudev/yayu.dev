import { useTranslation } from "next-i18next";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  padding: 1rem 3%;
  margin-bottom: 1rem;
  justify-content: center;
  font-size: 1.5rem;
  width: 100%;
  color: var(--text-color);
`;

const ButtonLabel = styled.span`
  cursor: pointer;
  margin: 0 2rem;
  color: var(--clickable-link-color);

  &:hover {
    color: var(--active-selection);
  }
`;

interface BlogPaginationProps {
  prevUrl?: string;
  nextUrl?: string;
}

export function BlogPagination({ prevUrl, nextUrl }: BlogPaginationProps) {
  const { t } = useTranslation();

  return (
    <Container data-testid="blog-pagination">
      {prevUrl && (
        <Link href={prevUrl} passHref data-testid="blog-pagination__prev-link">
          <ButtonLabel>{t("blog:back")}</ButtonLabel>
        </Link>
      )}

      {prevUrl && nextUrl && (
        <span data-testid="blog-pagination__separator">|</span>
      )}

      {nextUrl && (
        <Link href={nextUrl} passHref data-testid="blog-pagination__next-link">
          <ButtonLabel>{t("blog:next")}</ButtonLabel>
        </Link>
      )}
    </Container>
  );
}
