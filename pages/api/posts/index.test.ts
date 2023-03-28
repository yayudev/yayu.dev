import { createMocks } from "node-mocks-http";

import {
  blogPostListResult,
  contentfulApiMockService,
} from "@/utils/mocks/contentful";

import getPostsListHandler from "./index";

jest.mock("../../../services/server/contentful", () => ({
  contentfulApiService: contentfulApiMockService,
}));

test("should return posts", async () => {
  const { req, res } = createMocks({});

  await getPostsListHandler(req, res);

  const { posts, totalPosts } = JSON.parse(res._getData());

  expect(res._getStatusCode()).toBe(200);
  expect(posts).toEqual(blogPostListResult.posts);
  expect(posts).toHaveLength(5);
  expect(totalPosts).toBe(5);
});

test("should return posts with skip and limit", async () => {
  const { req, res } = createMocks({
    query: {
      skip: 2,
      limit: 2,
    },
  });

  await getPostsListHandler(req, res);

  const { posts, totalPosts } = JSON.parse(res._getData());

  expect(res._getStatusCode()).toBe(200);
  expect(posts).toHaveLength(2);
  expect(totalPosts).toBe(5);
});

test("should return a 500 error if something goes wrong", async () => {
  contentfulApiMockService.getPostsCollection = jest.fn().mockRejectedValue({});

  const { req, res } = createMocks({});

  await getPostsListHandler(req, res);

  const { message: errorMessage } = JSON.parse(res._getData());

  expect(res._getStatusCode()).toBe(500);
  expect(errorMessage).toEqual("Server Error");
});
