export type SettingsMenuType = {
  label: string;
  children: SettingsMenuItemType[];
};

export type SettingsMenuItemType = {
  label: string;
  optionKey: string;
  options: string[] | boolean[];
  tooltip: string;
};
