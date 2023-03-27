import { BlogPostListResult } from "@/types/blog-api";

export const blogPostListResult: BlogPostListResult = {
  posts: [
    {
      title: "Test",
      slug: "test",
      date: "2021-01-01",
      featured: false,
      excerpt: "test",
      markdown: "test",
      coverImage: {} as any,
      contentfulMetadata: {} as any,
      linkedFrom: {} as any,
    },
    {
      title: "Test 2",
      slug: "test-2",
      date: "2021-01-01",
      featured: false,
      excerpt: "test",
      markdown: "test",
      coverImage: {} as any,
      contentfulMetadata: {} as any,
      linkedFrom: {} as any,
    },
    {
      title: "Test 3",
      slug: "test-3",
      date: "2021-01-01",
      featured: false,
      excerpt: "test",
      markdown: "test",
      coverImage: {} as any,
      contentfulMetadata: {} as any,
      linkedFrom: {} as any,
    },
    {
      title: "Test 4",
      slug: "test-4",
      date: "2021-01-01",
      featured: false,
      excerpt: "test",
      markdown: "test",
      coverImage: {} as any,
      contentfulMetadata: {} as any,
      linkedFrom: {} as any,
    },
    {
      title: "Test 5",
      slug: "test-5",
      date: "2021-01-01",
      featured: false,
      excerpt: "test",
      markdown: "test",
      coverImage: {} as any,
      contentfulMetadata: {} as any,
      linkedFrom: {} as any,
    },
  ],
  totalPosts: 5,
};

export const mockContentfulClient = {
  getEntries: jest
    .fn()
    .mockImplementation(
      async ({ skip = 0, limit = 10, "fields.slug": slug = "" }) => {
        let posts = blogPostListResult.posts
          .slice(skip, skip + limit)
          .filter((post) => post.slug?.includes(slug));

        return {
          items: posts.map((entry) => ({
            fields: entry,
          })),
          total: posts.length,
        };
      }
    ),
};

export const contentfulApiMockService = {
  getPostsCollection: jest.fn().mockResolvedValue(blogPostListResult),
  getPostBySlug: jest.fn().mockResolvedValue(blogPostListResult.posts[0]),
};
