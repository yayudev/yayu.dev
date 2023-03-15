import { useTranslation } from "next-i18next";
import styled, { css } from "styled-components";

import { SortType } from "@/types/experiments";

import { GlitchedText } from "@/components/shared/glitched-text";

const SortingText = styled.div`
  color: var(--text-color);
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  text-align: right;
  font-weight: bold;
`;

const Button = styled.div<{ active: boolean }>`
  background: none;
  display: inline-block;
  color: var(--clickable-link-color);
  border: none;
  cursor: pointer;

  ${(props) =>
    props.active
      ? css`
          color: var(--active-selection);
          cursor: initial;
        `
      : ""}
`;

interface PlaygroundSortingOptionsProps {
  currentSort: SortType;
  onChange: (sort: SortType) => void;
}

export function PlaygroundSortingOptions({
  currentSort,
  onChange,
}: PlaygroundSortingOptionsProps) {
  const { t } = useTranslation();

  return (
    <SortingText>
      <span>{t("playground:sort-by")}</span>

      <Button
        active={currentSort === SortType.BY_MOST_RECENT}
        onClick={() => onChange(SortType.BY_MOST_RECENT)}
      >
        {currentSort === SortType.BY_MOST_RECENT ? (
          <GlitchedText animate={currentSort === SortType.BY_MOST_RECENT}>
            {t("playground:by-most-recent")}
          </GlitchedText>
        ) : (
          t("playground:by-most-recent")
        )}
      </Button>

      <span>{t("playground:separator")}</span>

      <Button
        active={currentSort === SortType.BY_NAME}
        onClick={() => onChange(SortType.BY_NAME)}
      >
        {currentSort === SortType.BY_NAME ? (
          <GlitchedText animate={currentSort === SortType.BY_NAME}>
            {t("playground:by-name")}
          </GlitchedText>
        ) : (
          t("playground:by-name")
        )}
      </Button>
    </SortingText>
  );
}
