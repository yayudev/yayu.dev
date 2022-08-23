export type BlogPost = {
  id: number;
  title: string;
  date: string;
  tags: string[];
  url: string; // Slug
  excerpt: string;
  html: string;
};

export type BlogPostListResult = {
  page: number;
  totalPosts: number;
  posts: BlogPost[];
};
