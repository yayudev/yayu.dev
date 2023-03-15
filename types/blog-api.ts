import { ContentfulBlogPost } from "@/types/cms";

export type BlogPost = Omit<ContentfulBlogPost, "sys">;

export type BlogPostListResult = {
  totalPosts: number;
  posts: BlogPost[];
};
