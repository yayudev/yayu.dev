// noinspection SpellCheckingInspection

import { SettingsMenuItemOption } from "@/types/settings-menu";
import { KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

type SettingsMenuItemProps = {
  labelKey: string;
  options?: SettingsMenuItemOption[];
  value?: string | boolean;
  isSelected?: boolean;
  isChildOption?: boolean;
  onClick: () => void;
};

const ListItem = styled.li<{ isSelected: boolean; isChildOption: boolean }>`
  display: flex;
  align-items: center;
  width: ${(props) => (props?.isSelected ? "100%" : "90%")};
  height: 2rem;
  padding: 1.25rem 0.75rem;
  margin-bottom: 1.5rem;
  background-color: ${(props) =>
    props?.isSelected ? "var(--alt-text-color)" : "var(--item-background)"};
  color: ${(props) =>
    props?.isSelected ? "var(--item-background)" : "var(--alt-text-color)"};
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    width 0.2s ease-in-out, padding-right 0.2s ease-in-out;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) =>
    !props?.isSelected &&
    `&:hover, &:focus {
      width: 95%;
      padding-right: calc(5% + .75rem);

      ${ListItemBackground} {
        transform: scaleX(100%);
      }
    }`}

  ${(props) =>
    props?.isSelected &&
    props.isChildOption &&
    `
    &:first-child {
      margin-top: 4px;
      margin-bottom: calc(1.5rem - 4px);
    }

    &:last-child {
      top: -4px;
    }

    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      position: absolute;
      top: -4px;
      left: 0;
      background-color: var(--alt-text-color);
    }

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: -4px;
      background-color: var(--alt-text-color);
    `}
`;

const ListItemBackground = styled.div`
  background-color: var(--item-background);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 300ms ease-in-out;
  will-change: transform;
`;

const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  width: 100%;
  padding-right: 1rem;
  z-index: 1;
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
  z-index: 1;
`;

export function SettingsMenuItem({
  labelKey,
  value,
  options = [],
  isSelected = false,
  isChildOption = false,
  onClick,
}: SettingsMenuItemProps) {
  const { t } = useTranslation();
  const label = t(labelKey);
  const selectedOption = options.find((option) => option.value === value);
  const valueLabel = t(selectedOption?.labelKey ?? "");
  const ariaLabel =
    selectedOption?.value !== undefined ? `${label}: ${valueLabel}` : label;

  function onKeypress(event: KeyboardEvent<HTMLLIElement>) {
    if (event.key === "Enter" || event.key === " ") {
      onClick();
    }
  }

  return (
    <ListItem
      isSelected={isSelected}
      isChildOption={isChildOption}
      tabIndex={0}
      role="listitem"
      aria-label={ariaLabel}
      onClick={onClick}
      onKeyDown={onKeypress}
    >
      <ListItemBackground />
      <ListItemSquare isSelected={isSelected} />
      <ListItemContent>
        <span> {label} </span>
        <span> {valueLabel} </span>
      </ListItemContent>
    </ListItem>
  );
}
