import { ContentfulBlogPost } from "@/types/cms";

/*
 * Cleaned up version of the Contentful blog post type.
 * This is the type that is returned by the blog API to the client to avoid
 * exposing internal Contentful types.
 */
export type BlogPost = Omit<ContentfulBlogPost, "sys">;

/**
 * Blog post list query result.
 * This is the type that is returned by the blog API when listing posts.
 */
export type BlogPostListResult = {
  /* Total number of posts available to be retrieved */
  totalPosts: number;

  /* List of posts included in the result */
  posts: BlogPost[];
};
