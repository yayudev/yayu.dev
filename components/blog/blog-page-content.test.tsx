import { render, screen } from "@testing-library/react";

import { blogPostListResult } from "../../__mock__/contentful";
import { BlogPageContent } from "./blog-page-content";

jest.mock("../../services/client/blog-api", () => ({
  blogApiService: {
    usePostList: jest.fn().mockReturnValue({
      postList: blogPostListResult.posts,
      totalPosts: blogPostListResult.total,
      isError: false,
      isLoading: false,
    }),
  },
}));

test("renders the blog posts list", () => {
  render(<BlogPageContent page={1} />);
  const blogPostsList = screen.getByTestId("blog-post-list");

  expect(blogPostsList).toBeInTheDocument();
});

test("renders the blog posts list with the correct number of posts", () => {
  render(<BlogPageContent page={1} />);
  const blogPostsItems = screen.getAllByTestId("blog-post-item");

  expect(blogPostsItems).toHaveLength(blogPostListResult.posts.length);
});

test("renders the blog pagination", () => {
  render(<BlogPageContent page={1} />);
  const blogPagination = screen.getByTestId("blog-pagination");

  expect(blogPagination).toBeInTheDocument();
});
