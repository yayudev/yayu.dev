export const MAX_WIDTH_TABLET = 992 as const;
export const MAX_WIDTH_PHONE = 768 as const;

export const MEDIA_QUERY_TABLET =
  `@media screen and (max-width: ${MAX_WIDTH_TABLET}px)` as const;

export const MEDIA_QUERY_PHONE =
  `@media screen and (max-width: ${MAX_WIDTH_PHONE}px)` as const;
