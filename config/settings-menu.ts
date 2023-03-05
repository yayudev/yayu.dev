import { SettingsMenuType } from "@/types/settings-menu";

export const SETTINGS_MENUS_LIST: SettingsMenuType[] = [
  {
    labelKey: "settings.content.label",
    children: [
      {
        labelKey: "settings.content.language.label",
        options: [
          { labelKey: "settings.content.language.en", value: "en" },
          { labelKey: "settings.content.language.es", value: "es" },
        ],
        optionKey: "content.language",
        tooltipKey: "settings.content.language.tooltip",
      },
      {
        labelKey: "settings.content.animations.label",
        options: [
          { labelKey: "settings.content.animations.on", value: true },
          { labelKey: "settings.content.animations.off", value: false },
        ],
        optionKey: "content.animations",
        tooltipKey: "settings.content.animations.tooltip",
      },
    ],
  },
  {
    labelKey: "settings.blog.label",
    children: [
      {
        labelKey: "settings.blog.comments.label",
        options: [
          { labelKey: "settings.blog.comments.on", value: true },
          { labelKey: "settings.blog.comments.off", value: false },
        ],
        optionKey: "blog.comments",
        tooltipKey: "settings.blog.comments.tooltip",
      },
      {
        labelKey: "settings.blog.social-share.label",
        options: [
          { labelKey: "settings.blog.social-share.on", value: true },
          { labelKey: "settings.blog.social-share.off", value: false },
        ],
        optionKey: "blog.social-share",
        tooltipKey: "settings.blog.social-share.tooltip",
      },
    ],
  },
  {
    labelKey: "settings.other.label",
    children: [
      {
        labelKey: "settings.other.tracking.label",
        options: [
          { labelKey: "settings.other.tracking.on", value: true },
          { labelKey: "settings.other.tracking.off", value: false },
        ],
        optionKey: "other.tracking",
        tooltipKey: "settings.other.tracking.tooltip",
      },
    ],
  },
];
