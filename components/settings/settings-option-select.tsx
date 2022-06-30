import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation("settings");

  return (
    <Container>
      {options.map((option) => {
        let displayValue = option as string;

        if (typeof option === "boolean") {
          displayValue = option ? "On" : "Off";
        }

        if (typeof option === "string") {
          displayValue = t(option);
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
