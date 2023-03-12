import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { SettingsMenuItemOption } from "@/types/settings-menu";
import { SettingsOptionSelectItem } from "./settings-option-select-item";

type SettingsOptionSelectProps = {
  options: SettingsMenuItemOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
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
        return (
          <SettingsOptionSelectItem
            key={option.text}
            label={t(option.text)}
            isSelected={selectedValue === option.value}
            onClick={() => onSelect(option.value)}
          />
        );
      })}
    </Container>
  );
}
