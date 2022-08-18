import { KeyboardEvent } from "react";
import styled from "styled-components";

type SettingsOptionSelectItemProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

const Item = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  width: 50vw;
  height: 2rem;
  padding: 1.5rem 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--item-background);
  color: var(--alt-text-color);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover,
  &:focus {
    transform: translateX(-1rem);
  }

  ${(props) =>
    props?.isSelected &&
    ` background-color: var(--alt-text-color);
      color: var(--item-background);
      transform: translateX(-2rem);

      &:hover, &:focus {
        transform: translateX(-2.5rem);
      }`}
`;

const ListItemSquare = styled.div<{ isSelected: boolean }>`
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  background-color: ${(props) =>
    props?.isSelected ? "var(--item-background)" : "var(--alt-text-color)"};
  transition: background-color 0.2s ease-in-out;
`;

export function SettingsOptionSelectItem({
  label,
  isSelected,
  onClick,
}: SettingsOptionSelectItemProps) {
  function onKeypress(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      onClick();
    }
  }

  return (
    <Item
      isSelected={isSelected}
      aria-label={label}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeypress}
    >
      <ListItemSquare isSelected={isSelected} />
      {label}
    </Item>
  );
}
