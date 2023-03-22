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
    <Container>
      {prevUrl && (
        <Link href={prevUrl} passHref>
          <ButtonLabel>{t("blog:back")}</ButtonLabel>
        </Link>
      )}

      {prevUrl && nextUrl && <span>|</span>}

      {nextUrl && (
        <Link href={nextUrl} passHref>
          <ButtonLabel>{t("blog:next")}</ButtonLabel>
        </Link>
      )}
    </Container>
  );
}
