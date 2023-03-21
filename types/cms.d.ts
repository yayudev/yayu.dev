export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Dimension: any;
  HexColor: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAsset = {
  __typename?: "Asset";
  contentType: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulContentfulMetadata;
  description: Maybe<Scalars["String"]>;
  fileName: Maybe<Scalars["String"]>;
  height: Maybe<Scalars["Int"]>;
  linkedFrom: Maybe<ContentfulAssetLinkingCollections>;
  size: Maybe<Scalars["Int"]>;
  sys: ContentfulSys;
  title: Maybe<Scalars["String"]>;
  url: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetContentTypeArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetFileNameArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetHeightArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetSizeArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetTitleArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetUrlArgs = {
  locale: InputMaybe<Scalars["String"]>;
  transform: InputMaybe<ContentfulImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type ContentfulAssetWidthArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

export type ContentfulAssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<ContentfulAsset>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type ContentfulAssetFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulAssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulAssetFilter>>>;
  contentType: InputMaybe<Scalars["String"]>;
  contentType_contains: InputMaybe<Scalars["String"]>;
  contentType_exists: InputMaybe<Scalars["Boolean"]>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentType_not: InputMaybe<Scalars["String"]>;
  contentType_not_contains: InputMaybe<Scalars["String"]>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  description: InputMaybe<Scalars["String"]>;
  description_contains: InputMaybe<Scalars["String"]>;
  description_exists: InputMaybe<Scalars["Boolean"]>;
  description_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not: InputMaybe<Scalars["String"]>;
  description_not_contains: InputMaybe<Scalars["String"]>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName: InputMaybe<Scalars["String"]>;
  fileName_contains: InputMaybe<Scalars["String"]>;
  fileName_exists: InputMaybe<Scalars["Boolean"]>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName_not: InputMaybe<Scalars["String"]>;
  fileName_not_contains: InputMaybe<Scalars["String"]>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  height: InputMaybe<Scalars["Int"]>;
  height_exists: InputMaybe<Scalars["Boolean"]>;
  height_gt: InputMaybe<Scalars["Int"]>;
  height_gte: InputMaybe<Scalars["Int"]>;
  height_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  height_lt: InputMaybe<Scalars["Int"]>;
  height_lte: InputMaybe<Scalars["Int"]>;
  height_not: InputMaybe<Scalars["Int"]>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size: InputMaybe<Scalars["Int"]>;
  size_exists: InputMaybe<Scalars["Boolean"]>;
  size_gt: InputMaybe<Scalars["Int"]>;
  size_gte: InputMaybe<Scalars["Int"]>;
  size_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size_lt: InputMaybe<Scalars["Int"]>;
  size_lte: InputMaybe<Scalars["Int"]>;
  size_not: InputMaybe<Scalars["Int"]>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
  title: InputMaybe<Scalars["String"]>;
  title_contains: InputMaybe<Scalars["String"]>;
  title_exists: InputMaybe<Scalars["Boolean"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not: InputMaybe<Scalars["String"]>;
  title_not_contains: InputMaybe<Scalars["String"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url: InputMaybe<Scalars["String"]>;
  url_contains: InputMaybe<Scalars["String"]>;
  url_exists: InputMaybe<Scalars["Boolean"]>;
  url_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url_not: InputMaybe<Scalars["String"]>;
  url_not_contains: InputMaybe<Scalars["String"]>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  width: InputMaybe<Scalars["Int"]>;
  width_exists: InputMaybe<Scalars["Boolean"]>;
  width_gt: InputMaybe<Scalars["Int"]>;
  width_gte: InputMaybe<Scalars["Int"]>;
  width_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  width_lt: InputMaybe<Scalars["Int"]>;
  width_lte: InputMaybe<Scalars["Int"]>;
  width_not: InputMaybe<Scalars["Int"]>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type ContentfulAssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  blogPostCollection: Maybe<ContentfulBlogPostCollection>;
  entryCollection: Maybe<ContentfulEntryCollection>;
};

export type ContentfulAssetLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulAssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum ContentfulAssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** Blog post [See type definition](https://app.contentful.com/spaces/1fnpih0gmmjm/content_types/blogPost) */
export type ContentfulBlogPost = ContentfulEntry & {
  __typename?: "BlogPost";
  contentfulMetadata: ContentfulContentfulMetadata;
  coverImage: Maybe<ContentfulAsset>;
  date: Maybe<Scalars["DateTime"]>;
  excerpt: Maybe<Scalars["String"]>;
  linkedFrom: Maybe<ContentfulBlogPostLinkingCollections>;
  markdown: Maybe<Scalars["String"]>;
  slug: Maybe<Scalars["String"]>;
  sys: ContentfulSys;
  title: Maybe<Scalars["String"]>;
};

/** Blog post [See type definition](https://app.contentful.com/spaces/1fnpih0gmmjm/content_types/blogPost) */
export type ContentfulBlogPostCoverImageArgs = {
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
};

/** Blog post [See type definition](https://app.contentful.com/spaces/1fnpih0gmmjm/content_types/blogPost) */
export type ContentfulBlogPostDateArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Blog post [See type definition](https://app.contentful.com/spaces/1fnpih0gmmjm/content_types/blogPost) */
export type ContentfulBlogPostExcerptArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Blog post [See type definition](https://app.contentful.com/spaces/1fnpih0gmmjm/content_types/blogPost) */
export type ContentfulBlogPostLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Blog post [See type definition](https://app.contentful.com/spaces/1fnpih0gmmjm/content_types/blogPost) */
export type ContentfulBlogPostMarkdownArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Blog post [See type definition](https://app.contentful.com/spaces/1fnpih0gmmjm/content_types/blogPost) */
export type ContentfulBlogPostSlugArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

/** Blog post [See type definition](https://app.contentful.com/spaces/1fnpih0gmmjm/content_types/blogPost) */
export type ContentfulBlogPostTitleArgs = {
  locale: InputMaybe<Scalars["String"]>;
};

export type ContentfulBlogPostCollection = {
  __typename?: "BlogPostCollection";
  items: Array<Maybe<ContentfulBlogPost>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type ContentfulBlogPostFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulBlogPostFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulBlogPostFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  coverImage_exists: InputMaybe<Scalars["Boolean"]>;
  date: InputMaybe<Scalars["DateTime"]>;
  date_exists: InputMaybe<Scalars["Boolean"]>;
  date_gt: InputMaybe<Scalars["DateTime"]>;
  date_gte: InputMaybe<Scalars["DateTime"]>;
  date_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  date_lt: InputMaybe<Scalars["DateTime"]>;
  date_lte: InputMaybe<Scalars["DateTime"]>;
  date_not: InputMaybe<Scalars["DateTime"]>;
  date_not_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  excerpt: InputMaybe<Scalars["String"]>;
  excerpt_contains: InputMaybe<Scalars["String"]>;
  excerpt_exists: InputMaybe<Scalars["Boolean"]>;
  excerpt_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  excerpt_not: InputMaybe<Scalars["String"]>;
  excerpt_not_contains: InputMaybe<Scalars["String"]>;
  excerpt_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  markdown: InputMaybe<Scalars["String"]>;
  markdown_contains: InputMaybe<Scalars["String"]>;
  markdown_exists: InputMaybe<Scalars["Boolean"]>;
  markdown_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  markdown_not: InputMaybe<Scalars["String"]>;
  markdown_not_contains: InputMaybe<Scalars["String"]>;
  markdown_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug: InputMaybe<Scalars["String"]>;
  slug_contains: InputMaybe<Scalars["String"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug_not: InputMaybe<Scalars["String"]>;
  slug_not_contains: InputMaybe<Scalars["String"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys: InputMaybe<ContentfulSysFilter>;
  title: InputMaybe<Scalars["String"]>;
  title_contains: InputMaybe<Scalars["String"]>;
  title_exists: InputMaybe<Scalars["Boolean"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not: InputMaybe<Scalars["String"]>;
  title_not_contains: InputMaybe<Scalars["String"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContentfulBlogPostLinkingCollections = {
  __typename?: "BlogPostLinkingCollections";
  entryCollection: Maybe<ContentfulEntryCollection>;
};

export type ContentfulBlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum ContentfulBlogPostOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type ContentfulContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulContentfulTag>>;
};

export type ContentfulContentfulMetadataFilter = {
  tags: InputMaybe<ContentfulContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars["Boolean"]>;
};

export type ContentfulContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulContentfulTag = {
  __typename?: "ContentfulTag";
  id: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
};

export type ContentfulEntry = {
  contentfulMetadata: ContentfulContentfulMetadata;
  sys: ContentfulSys;
};

export type ContentfulEntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<ContentfulEntry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type ContentfulEntryFilter = {
  AND: InputMaybe<Array<InputMaybe<ContentfulEntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContentfulEntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulContentfulMetadataFilter>;
  sys: InputMaybe<ContentfulSysFilter>;
};

export enum ContentfulEntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum ContentfulImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ContentfulImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ContentfulImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type ContentfulImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars["HexColor"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars["Int"]>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ContentfulImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars["Dimension"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars["Quality"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ContentfulImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ContentfulImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars["Dimension"]>;
};

export type ContentfulQuery = {
  __typename?: "Query";
  asset: Maybe<ContentfulAsset>;
  assetCollection: Maybe<ContentfulAssetCollection>;
  blogPost: Maybe<ContentfulBlogPost>;
  blogPostCollection: Maybe<ContentfulBlogPostCollection>;
  entryCollection: Maybe<ContentfulEntryCollection>;
};

export type ContentfulQueryAssetArgs = {
  id: Scalars["String"];
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
};

export type ContentfulQueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulAssetOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where: InputMaybe<ContentfulAssetFilter>;
};

export type ContentfulQueryBlogPostArgs = {
  id: Scalars["String"];
  locale: InputMaybe<Scalars["String"]>;
  preview: InputMaybe<Scalars["Boolean"]>;
};

export type ContentfulQueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulBlogPostOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where: InputMaybe<ContentfulBlogPostFilter>;
};

export type ContentfulQueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale: InputMaybe<Scalars["String"]>;
  order: InputMaybe<Array<InputMaybe<ContentfulEntryOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where: InputMaybe<ContentfulEntryFilter>;
};

export type ContentfulSys = {
  __typename?: "Sys";
  environmentId: Scalars["String"];
  firstPublishedAt: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  publishedAt: Maybe<Scalars["DateTime"]>;
  publishedVersion: Maybe<Scalars["Int"]>;
  spaceId: Scalars["String"];
};

export type ContentfulSysFilter = {
  firstPublishedAt: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_exists: InputMaybe<Scalars["Boolean"]>;
  firstPublishedAt_gt: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_gte: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  firstPublishedAt_lt: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_lte: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  id: InputMaybe<Scalars["String"]>;
  id_contains: InputMaybe<Scalars["String"]>;
  id_exists: InputMaybe<Scalars["Boolean"]>;
  id_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_not: InputMaybe<Scalars["String"]>;
  id_not_contains: InputMaybe<Scalars["String"]>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  publishedAt: InputMaybe<Scalars["DateTime"]>;
  publishedAt_exists: InputMaybe<Scalars["Boolean"]>;
  publishedAt_gt: InputMaybe<Scalars["DateTime"]>;
  publishedAt_gte: InputMaybe<Scalars["DateTime"]>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedAt_lt: InputMaybe<Scalars["DateTime"]>;
  publishedAt_lte: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedVersion: InputMaybe<Scalars["Float"]>;
  publishedVersion_exists: InputMaybe<Scalars["Boolean"]>;
  publishedVersion_gt: InputMaybe<Scalars["Float"]>;
  publishedVersion_gte: InputMaybe<Scalars["Float"]>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  publishedVersion_lt: InputMaybe<Scalars["Float"]>;
  publishedVersion_lte: InputMaybe<Scalars["Float"]>;
  publishedVersion_not: InputMaybe<Scalars["Float"]>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};
