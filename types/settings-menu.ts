export type SettingsMenuType = {
  labelKey: string;
  children: SettingsMenuItemType[];
};

export type SettingsMenuItemType = {
  labelKey: string;
  optionKey: string;
  options: string[] | boolean[];
  tooltipKey: string;
};
