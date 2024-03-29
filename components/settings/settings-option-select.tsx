import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { SettingsMenuItemOption } from "@/types/settings-menu";

import { MEDIA_QUERY_PHONE } from "@/constants/media-queries";

import { SettingsOptionSelectItem } from "@/components/settings/settings-option-select-item";

interface SettingsOptionSelectProps {
  options: SettingsMenuItemOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 5rem;
  right: -1rem;
  z-index: 2;

  ${MEDIA_QUERY_PHONE} {
    bottom: 1rem;
  }
`;

export function SettingsOptionSelect({
  options,
  selectedValue,
  onSelect,
}: SettingsOptionSelectProps) {
  const { t } = useTranslation();

  return (
    <Container data-testid="settings-option-select">
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
