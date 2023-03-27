import { BlogApiService } from "./blog-api";

jest.mock("../../constants/blog-api", () => ({
  POSTS_ENDPOINT: "/api/posts",
}));

test("getIndividualPostUrl", () => {
  const service = new BlogApiService();
  const result = service.getIndividualPostUrl("123");
  expect(result).toBe("/api/posts/123");
});

test("getPostListUrl", () => {
  const service = new BlogApiService();
  const result = service.getPostListUrl(1);
  expect(result).toBe("/api/posts?skip=0&limit=10");
});

test("getPostListSizeUrl", () => {
  const service = new BlogApiService();
  const result = service.getPostListSizeUrl();
  expect(result).toBe("/api/posts?skip=0&limit=0");
});

test("getAllPostsSlugsUrl", () => {
  const service = new BlogApiService();
  const result = service.getAllPostsSlugsUrl();
  expect(result).toBe("/api/posts/getAllSlugs");
});
