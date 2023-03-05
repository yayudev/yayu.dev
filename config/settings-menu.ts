import { SettingsMenuType } from "@/types/settings-menu";

export const SETTINGS_MENUS_LIST: SettingsMenuType[] = [
  {
    labelKey: "settings:settings.content.label",
    children: [
      {
        labelKey: "settings:settings.content.language.label",
        options: [
          { labelKey: "settings:settings.content.language.en", value: "en" },
          { labelKey: "settings:settings.content.language.es", value: "es" },
        ],
        optionKey: "settings:settings.content.language",
        tooltipKey: "settings:settings.content.language.tooltip",
      },
      {
        labelKey: "settings:settings.content.animations.label",
        options: [
          { labelKey: "settings:settings.content.animations.on", value: true },
          {
            labelKey: "settings:settings.content.animations.off",
            value: false,
          },
        ],
        optionKey: "settings:settings.content.animations",
        tooltipKey: "settings:settings.content.animations.tooltip",
      },
    ],
  },
  {
    labelKey: "settings:settings.blog.label",
    children: [
      {
        labelKey: "settings:settings.blog.comments.label",
        options: [
          { labelKey: "settings:settings.blog.comments.on", value: true },
          { labelKey: "settings:settings.blog.comments.off", value: false },
        ],
        optionKey: "settings:settings.blog.comments",
        tooltipKey: "settings:settings.blog.comments.tooltip",
      },
      {
        labelKey: "settings:settings.blog.social-share.label",
        options: [
          { labelKey: "settings:settings.blog.social-share.on", value: true },
          { labelKey: "settings:settings.blog.social-share.off", value: false },
        ],
        optionKey: "settings:blog.social-share",
        tooltipKey: "settings:settings.blog.social-share.tooltip",
      },
    ],
  },
  {
    labelKey: "settings:settings.other.label",
    children: [
      {
        labelKey: "settings:settings.other.tracking.label",
        options: [
          { labelKey: "settings:settings.other.tracking.on", value: true },
          { labelKey: "settings:settings.other.tracking.off", value: false },
        ],
        optionKey: "settings:other.tracking",
        tooltipKey: "settings:settings.other.tracking.tooltip",
      },
    ],
  },
];
