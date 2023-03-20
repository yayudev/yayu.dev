import { createClient, ContentfulClientApi } from "contentful";

import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  IS_PREVIEW_MODE,
} from "@/constants/contenful";
import { ContentfulBlogPost } from "@/types/cms";
import { BlogPost, BlogPostListResult } from "@/types/blog-api";

export class ContentfulApiService {
  private client: ContentfulClientApi;

  constructor() {
    if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
      throw new Error(
        "CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be provided."
      );
    }

    this.client = createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_ACCESS_TOKEN,
      host: IS_PREVIEW_MODE ? "preview.contentful.com" : "contentful.com",
    });
  }

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
   * Remove sys data from an entry.
   */
  private cleanEntry(entry: ContentfulBlogPost): BlogPost {
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

export const contentfulApiService = new ContentfulApiService();
