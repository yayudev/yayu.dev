import { ContentfulClientApi, createClient } from "contentful";

import type { BlogPost, BlogPostListResult } from "@/types/blog-api";
import type { ContentfulBlogPost } from "@/types/cms";

/**
 * Service for interacting with Contentful API.
 * This service should be used on the server side only to avoid bundling
 * the Contentful SDK in the client bundle.
 *
 * For client side interactions with the Contentful API, use other client
 * side services such as `BlogApiService`.
 */
export class ContentfulApiService {
  /* Contentful client instance. */
  private readonly client: ContentfulClientApi;

  constructor() {
    const spaceId = process.env.CONTENTFUL_SPACE_ID || "";
    const accessToken =
      process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ||
      process.env.CONTENTFUL_ACCESS_TOKEN ||
      "";
    const previewMode = Boolean(process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN);

    if (!spaceId || !accessToken) {
      throw new Error(
        "CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be provided."
      );
    }

    this.client = createClient({
      space: spaceId,
      accessToken: accessToken,
      host: previewMode ? "preview.contentful.com" : undefined,
    });
  }

  /**
   * Get a list of posts from Contentful with pagination.
   *
   * @param skip - Number of posts to skip.
   * @param limit - Number of posts to return.
   * @returns List of posts and total number of posts.
   */
  public async getPostsCollection({
    skip = 0,
    limit = 10,
  }): Promise<BlogPostListResult> {
    const collection = await this.client.getEntries<ContentfulBlogPost>({
      content_type: "blogPost",
      skip,
      limit,
    });

    if (!collection.items) {
      throw new Error("Error getting Entries for Posts");
    }

    const posts = collection.items.map((entry) =>
      this.cleanEntry(entry.fields)
    );

    return {
      posts,
      totalPosts: collection.total,
    };
  }

  /**
   * Get a single post by slug from Contentful.
   *
   * @param slug - Slug of the post to get.
   * @returns Post.
   */
  public async getPostBySlug(slug: string): Promise<BlogPost> {
    const entries = await this.client.getEntries<ContentfulBlogPost>({
      content_type: "blogPost",
      "fields.slug": slug,
    });

    if (!entries?.items?.length) {
      throw new Error(`Blog post not found: ${slug}`);
    }

    const entry = entries.items[0].fields;

    return this.cleanEntry(entry);
  }

  /**
   * Remove sys data from an entry in order to be able to serialize it without
   * including contentful specific data.
   *
   * @param entry - Entry to clean.
   * @returns Cleaned entry.
   */
  public cleanEntry(entry: ContentfulBlogPost): BlogPost {
    return {
      ...entry,
      sys: undefined,
      coverImage: {
        ...entry.coverImage,
        sys: undefined,
      } as any,
    } as BlogPost;
  }
}

/**
 * Singleton instance of ContentfulApiService.
 * Prefer using this instance instead of creating a new one.
 */
export const contentfulApiService = new ContentfulApiService();
