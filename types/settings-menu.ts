export type SettingsMenuItemOption = {
  text: string;
  value: string;
};

export enum MenuCategory {
  CONTENT = "content",
  BLOG = "blog",
  OTHER = "other",
}

export enum MenuSubCategory {
  LANGUAGE = "language",
  ANIMATIONS = "animations",
  COMMENTS = "comments",
  SOCIAL_SHARE = "social-share",
  TRACKING = "tracking",
}

export enum SettingsToggleOptions {
  ON = "on",
  OFF = "off",
}

export enum SettingsLanguageOptions {
  ENGLISH = "en",
  SPANISH = "es",
}
