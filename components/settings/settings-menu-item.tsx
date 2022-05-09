import styled from "styled-components";

type SettingsMenuItemProps = {
  label: string;
  value?: string | boolean;
  isSelected?: boolean;
  isChildOption?: boolean;
  onClick: () => void;
};

const ListItem = styled.div<{ isSelected: boolean; isChildOption: boolean }>`
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
    `&:hover {
      width: 95%;
      padding-right: calc(5% + .75rem);
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

const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  width: 100%;
  padding-right: 1rem;
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

export function SettingsMenuItem({
  label,
  value,
  isSelected = false,
  isChildOption = false,
  onClick,
}: SettingsMenuItemProps) {
  let displayedValue = value;

  if (typeof value === "boolean") {
    displayedValue = value ? "On" : "Off";
  }

  return (
    <ListItem
      isSelected={isSelected}
      isChildOption={isChildOption}
      onClick={onClick}
    >
      <ListItemSquare isSelected={isSelected} />
      <ListItemContent>
        <span> {label} </span>
        <span> {displayedValue} </span>
      </ListItemContent>
    </ListItem>
  );
}
