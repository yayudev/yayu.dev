export type SettingsMenuType = {
  label: string;
  children: SettingsMenuItemType[];
};

export type SettingsMenuItemType = {
  label: string;
  value: string | boolean;
  optionKey: string;
  options: string[] | boolean[];
  tooltip: string;
};
