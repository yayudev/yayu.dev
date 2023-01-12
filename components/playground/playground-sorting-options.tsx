import styled, { css } from "styled-components";
import { useTranslation } from "next-i18next";

import { GlitchedText } from "@/components/shared/glitched-text";
import { SortType } from "@/types/experiments";

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

export interface PlaygroundSortingOptionsProps {
  currentSort: SortType;
  onChange: (sort: SortType) => void;
}

export function PlaygroundSortingOptions({
  currentSort,
  onChange,
}: PlaygroundSortingOptionsProps) {
  const { t } = useTranslation("playground");

  return (
    <SortingText>
      <span>{t("sort-by")}</span>

      <Button
        active={currentSort === SortType.BY_MOST_RECENT}
        onClick={() => onChange(SortType.BY_MOST_RECENT)}
      >
        {currentSort === SortType.BY_MOST_RECENT ? (
          <GlitchedText animate={currentSort === SortType.BY_MOST_RECENT}>
            {t("by-most-recent")}
          </GlitchedText>
        ) : (
          t("by-most-recent")
        )}
      </Button>

      <span>{t("separator")}</span>

      <Button
        active={currentSort === SortType.BY_NAME}
        onClick={() => onChange(SortType.BY_NAME)}
      >
        {currentSort === SortType.BY_NAME ? (
          <GlitchedText animate={currentSort === SortType.BY_NAME}>
            {t("by-name")}
          </GlitchedText>
        ) : (
          t("by-name")
        )}
      </Button>
    </SortingText>
  );
}
