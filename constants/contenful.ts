export const CONTENTFUL_SPACE_ID: string =
  process.env.CONTENTFUL_SPACE_ID ?? "";

export const CONTENTFUL_ACCESS_TOKEN: string =
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ??
  process.env.CONTENTFUL_ACCESS_TOKEN ??
  "";

export const IS_PREVIEW_MODE: boolean = Boolean(
  process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
);
