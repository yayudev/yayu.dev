import { SettingsMenuType } from "@/types/settings-menu";

export const SETTINGS_MENUS_LIST: SettingsMenuType[] = [
  {
    labelKey: "content",
    children: [
      {
        labelKey: "language.title",
        tooltipKey: "language.description",
        optionKey: "global.language",
        options: ["language.es", "language.en"],
      },
      {
        labelKey: "animations.title",
        tooltipKey: "animations.description",
        optionKey: "global.animations",
        options: [true, false],
      },
      {
        labelKey: "sounds.title",
        tooltipKey: "sounds.description",
        optionKey: "global.sounds",
        options: [true, false],
      },
    ],
  },
  {
    labelKey: "blog",
    children: [
      {
        labelKey: "blog-comments.title",
        tooltipKey: "blog-comments.description",
        optionKey: "blog.comments",
        options: [true, false],
      },
      {
        labelKey: "social-share.title",
        tooltipKey: "social-share.description",
        optionKey: "blog.share",
        options: [true, false],
      },
    ],
  },
  {
    labelKey: "other",
    children: [
      {
        labelKey: "allow-tracking.title",
        tooltipKey: "allow-tracking.description",
        optionKey: "global.allowTracking",
        options: [true, false],
      },
    ],
  },
];
