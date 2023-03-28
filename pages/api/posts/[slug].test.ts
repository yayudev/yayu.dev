import { createMocks } from "node-mocks-http";

import { contentfulApiMockService } from "@/utils/mocks/contentful";

import getPostsBySlugHandler from "@/pages/api/posts/[slug]";

jest.mock("../../../services/server/contentful", () => ({
  contentfulApiService: contentfulApiMockService,
}));

afterEach(() => {
  jest.resetAllMocks();
});

test("should return a post", async () => {
  const { req, res } = createMocks({
    query: {
      slug: "test-2",
    },
  });

  await getPostsBySlugHandler(req, res);

  const { title, slug } = JSON.parse(res._getData());

  expect(res._getStatusCode()).toBe(200);
  expect(title).toEqual("Test 2");
  expect(slug).toEqual("test-2");
});

test("should return a 404 error if post is not found", async () => {
  const { req, res } = createMocks({
    query: {
      slug: "not-found",
    },
  });

  await getPostsBySlugHandler(req, res);

  const { message: errorMessage } = JSON.parse(res._getData());

  expect(res._getStatusCode()).toBe(404);
  expect(errorMessage).toEqual("Post not found");
});

test("should return a 500 error if an error occurs", async () => {
  contentfulApiMockService.getPostBySlug = jest.fn().mockRejectedValue({});
  const { req, res } = createMocks({
    query: {
      slug: "error",
    },
  });

  await getPostsBySlugHandler(req, res);

  const { message: errorMessage } = JSON.parse(res._getData());

  expect(res._getStatusCode()).toBe(500);
  expect(errorMessage).toEqual("Server Error");
});
