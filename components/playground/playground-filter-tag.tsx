import styled, { css } from "styled-components";

import { TechnologyTag } from "@/types/experiments";

const Tag = styled.li<{ active: boolean }>`
  list-style: none;
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem 1rem 0;
  cursor: pointer;
  color: ${({ active }) => {
    return active ? css`var(--link-color)` : css`var(--text-color)`;
  }};
  background-color: ${({ active }) => {
    return active ? css`var(--active-selection)` : css`var(--background-alt)`;
  }};
  border-radius: 10px;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

interface PlaygroundFilterTagProps {
  label: TechnologyTag;
  active: boolean;
  onClick: () => void;
}

export function PlaygroundFilterTag({
  label,
  active,
  onClick,
}: PlaygroundFilterTagProps) {
  return (
    <Tag data-testid="playground-filter-tag" active={active} onClick={onClick}>
      {label}
    </Tag>
  );
}
