import { SettingsMenuType } from "@/types/settings-menu";

export const SETTINGS_MENUS_LIST: SettingsMenuType[] = [
  {
    label: "Content",
    children: [
      {
        label: "Language",
        value: "English",
        options: ["English", "Spanish"],
        optionKey: "language",
        tooltip: "Select your language (Default: English)",
      },
      {
        label: "Animations",
        value: false,
        options: [true, false],
        optionKey: "animations",
        tooltip: "Enable or disable animations. (Default: false)",
      },
      {
        label: "Sounds",
        value: false,
        options: [true, false],
        optionKey: "sounds",
        tooltip: "Enable or disable sounds. (Default: false)",
      },
    ],
  },
  {
    label: "Blog",
    children: [
      {
        label: "Blog comments",
        value: true,
        options: [true, false],
        optionKey: "blogComments",
        tooltip: "Enable or disable blog comments. (Default: true)",
      },
      {
        label: "Social share",
        value: false,
        options: [true, false],
        optionKey: "socialShare",
        tooltip: "Enable or disable social share. (Default: false)",
      },
    ],
  },
  {
    label: "Other",
    children: [
      {
        label: "Allow tracking",
        value: true,
        options: [true, false],
        optionKey: "allowTracking",
        tooltip: "Allow or disallow tracking. (Default: true)",
      },
    ],
  },
];
