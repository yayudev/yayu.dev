import { mockContentfulClient } from "@/utils/mocks/contentful";

import { ContentfulApiService } from "./contentful";

jest.mock("contentful", () => ({
  createClient: () => mockContentfulClient,
}));

describe("ContentfulApiService", () => {
  let service: ContentfulApiService;

  describe("constructor", () => {
    beforeEach(() => {
      process.env.CONTENTFUL_SPACE_ID = "";
      process.env.CONTENTFUL_ACCESS_TOKEN = "";
      process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN = "";
    });

    afterAll(() => {
      process.env.CONTENTFUL_SPACE_ID = "test";
      process.env.CONTENTFUL_ACCESS_TOKEN = "test";
    });

    it("should create a client with the correct space id and access token", () => {
      process.env.CONTENTFUL_SPACE_ID = "test-space";
      process.env.CONTENTFUL_ACCESS_TOKEN = "test-token";

      new ContentfulApiService();
    });

    it("should throw an error if no space id is provided", () => {
      process.env.CONTENTFUL_SPACE_ID = "";
      process.env.CONTENTFUL_ACCESS_TOKEN = "test-token";

      expect(() => new ContentfulApiService()).toThrow(
        "CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be provided."
      );
    });

    it("should throw an error if no access token is provided", () => {
      process.env.CONTENTFUL_SPACE_ID = "test";
      process.env.CONTENTFUL_ACCESS_TOKEN = "";

      expect(() => new ContentfulApiService()).toThrow(
        "CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be provided."
      );
    });
  });

  describe("getPostsCollection", () => {
    beforeEach(() => {
      service = new ContentfulApiService();
    });

    it("should return a list of posts", async () => {
      const result = await service.getPostsCollection({ skip: 0, limit: 10 });

      expect(result.posts).toHaveLength(5);
      expect(result.posts[0].title).toEqual("Test");
      expect(result.posts[0].slug).toEqual("test");
      expect(result.posts[1].title).toEqual("Test 2");
      expect(result.posts[1].slug).toEqual("test-2");
    });

    it("should return a list of posts with a skip", async () => {
      const result = await service.getPostsCollection({ skip: 2, limit: 5 });

      expect(result.posts).toHaveLength(3);
      expect(result.posts[0].title).toEqual("Test 3");
      expect(result.posts[0].slug).toEqual("test-3");
    });

    it("should return a list of posts with a limit", async () => {
      const result = await service.getPostsCollection({ skip: 0, limit: 2 });

      expect(result.posts).toHaveLength(2);
      expect(result.posts[0].title).toEqual("Test");
      expect(result.posts[0].slug).toEqual("test");
      expect(result.posts[1].title).toEqual("Test 2");
      expect(result.posts[1].slug).toEqual("test-2");
    });
  });

  describe("getPostBySlug", () => {
    beforeEach(() => {
      service = new ContentfulApiService();
    });

    it("should return a post with the correct slug", async () => {
      const result = await service.getPostBySlug("test-3");

      expect(result.title).toEqual("Test 3");
      expect(result.slug).toEqual("test-3");
    });

    it("should throw an error if the post does not exist", async () => {
      await expect(service.getPostBySlug("test-6")).rejects.toThrow();
    });
  });
});
