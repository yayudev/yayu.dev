import { createMocks } from "node-mocks-http";

import { contentfulApiMockService } from "@/utils/mocks/contentful";

import getAllSlugsHandler from "@/pages/api/posts/getAllSlugs";

jest.mock("../../../services/server/contentful", () => ({
  contentfulApiService: contentfulApiMockService,
}));

test("should return a list of slugs", async () => {
  const { req, res } = createMocks();

  await getAllSlugsHandler(req, res);

  const { slugs, totalPosts } = JSON.parse(res._getData());

  expect(res._getStatusCode()).toBe(200);
  expect(slugs).toEqual(["test", "test-2", "test-3", "test-4", "test-5"]);
  expect(totalPosts).toEqual(5);
});

test("should return a 500 error if an error occurs", async () => {
  contentfulApiMockService.getPostsCollection = jest.fn().mockRejectedValue({});
  const { req, res } = createMocks();

  await getAllSlugsHandler(req, res);

  const { message: errorMessage } = JSON.parse(res._getData());

  expect(res._getStatusCode()).toBe(500);
  expect(errorMessage).toEqual("Server Error");
});
