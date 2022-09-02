import { GlitchedText } from "@/components/shared/glitched-text";
import styled, { css } from "styled-components";
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
  return (
    <SortingText>
      <span>Sort by </span>

      <Button
        active={currentSort === SortType.BY_MOST_RECENT}
        onClick={() => onChange(SortType.BY_MOST_RECENT)}
      >
        {currentSort === SortType.BY_MOST_RECENT ? (
          <GlitchedText animate={currentSort === SortType.BY_MOST_RECENT}>
            Most Recent
          </GlitchedText>
        ) : (
          "Most Recent"
        )}
      </Button>

      <span> | </span>

      <Button
        active={currentSort === SortType.BY_NAME}
        onClick={() => onChange(SortType.BY_NAME)}
      >
        {currentSort === SortType.BY_NAME ? (
          <GlitchedText animate={currentSort === SortType.BY_NAME}>
            Name
          </GlitchedText>
        ) : (
          "Name"
        )}
      </Button>
    </SortingText>
  );
}
