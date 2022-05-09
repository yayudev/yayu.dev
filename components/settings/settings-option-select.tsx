import styled from "styled-components";
import { SettingsOptionSelectItem } from "./settings-option-select-item";

type SettingsOptionSelectProps = {
  options: string[] | boolean[];
  selectedValue: string | boolean;
  onSelect: (value: string | boolean) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 5rem;
  right: -1rem;
`;

export function SettingsOptionSelect({
  options,
  selectedValue,
  onSelect,
}: SettingsOptionSelectProps) {
  return (
    <Container>
      {options.map((option) => {
        let displayValue = option as string;

        if (typeof option === "boolean") {
          displayValue = option ? "Yes" : "No";
        }

        return (
          <SettingsOptionSelectItem
            key={displayValue}
            label={displayValue}
            isSelected={option === selectedValue}
            onClick={() => onSelect(option)}
          />
        );
      })}
    </Container>
  );
}
