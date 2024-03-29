import { useTranslation } from "next-i18next";
import { KeyboardEvent } from "react";
import styled from "styled-components";

import { MEDIA_QUERY_TABLET } from "@/constants/media-queries";

interface SettingsOptionSelectItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

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
  box-shadow: 0 -0rem 1rem rgba(0, 0, 0, 0.5);

  &:hover,
  &:focus {
    transform: translateX(-1rem);
  }

  ${MEDIA_QUERY_TABLET} {
    width: 65vw;
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
  const { t } = useTranslation();

  function onKeypress(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter" || event.key === " ") {
      onClick();
    }
  }

  return (
    <Item
      data-testid="settings-option-select-item"
      isSelected={isSelected}
      aria-label={t(label) ?? ""}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeypress}
    >
      <ListItemSquare isSelected={isSelected} />
      {t(label)}
    </Item>
  );
}
