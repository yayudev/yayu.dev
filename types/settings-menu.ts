export type SettingsMenuType = {
  labelKey: string;
  children: SettingsMenuItemType[];
};

export type SettingsMenuItemType = {
  labelKey: string;
  optionKey: string;
  options: SettingsMenuItemOption[];
  tooltipKey: string;
};

export type SettingsMenuItemOption = {
  labelKey: string;
  value: string | boolean;
};
