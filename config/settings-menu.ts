import { SettingsMenuType } from "@/types/settings-menu";

export const SETTINGS_MENUS_LIST: SettingsMenuType[] = [
  {
    label: "Content",
    children: [
      {
        label: "Language",
        options: ["English", "Spanish"],
        optionKey: "global.language",
        tooltip: "Select your language (Default: English)",
      },
      {
        label: "Animations",
        options: [true, false],
        optionKey: "global.animations",
        tooltip: "Enable or disable animations. (Default: false)",
      },
      {
        label: "Sounds",
        options: [true, false],
        optionKey: "global.sounds",
        tooltip: "Enable or disable sounds. (Default: false)",
      },
    ],
  },
  {
    label: "Blog",
    children: [
      {
        label: "Blog comments",
        options: [true, false],
        optionKey: "blog.comments",
        tooltip: "Enable or disable blog comments. (Default: true)",
      },
      {
        label: "Social share",
        options: [true, false],
        optionKey: "blog.share",
        tooltip: "Enable or disable social share. (Default: false)",
      },
    ],
  },
  {
    label: "Other",
    children: [
      {
        label: "Allow tracking",
        options: [true, false],
        optionKey: "global.allowTracking",
        tooltip: "Allow or disallow tracking. (Default: true)",
      },
    ],
  },
];
