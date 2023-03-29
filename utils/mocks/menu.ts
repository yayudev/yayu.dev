import {
  SettingsLanguageOptions,
  SettingsMenuItemOption,
} from "@/types/settings-menu";

export const mockMenuOptions: SettingsMenuItemOption[] = [
  {
    text: "English",
    value: SettingsLanguageOptions.ENGLISH,
  },
  {
    text: "Spanish",
    value: SettingsLanguageOptions.SPANISH,
  },
];
