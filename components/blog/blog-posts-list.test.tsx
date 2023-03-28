import { blogPostListResult } from "@/__mock__/contentful";
import { render, screen } from "@testing-library/react";

import { BlogPostsList } from "./blog-posts-list";

afterEach(() => {
  jest.restoreAllMocks();
});

const RenderWrapper = (props: any) => {
  return (
    <div id="page-content">
      <BlogPostsList {...props} />
      );
    </div>
  );
};

test("renders correctly", () => {
  render(<RenderWrapper posts={blogPostListResult.posts} />);

  expect(screen.getByTestId("blog-post-list")).toBeInTheDocument();
});

test("scrolls to top on page change", () => {
  render(<RenderWrapper posts={blogPostListResult.posts} />);

  expect(Element.prototype.scrollTo).toHaveBeenCalledTimes(1);
  expect(Element.prototype.scrollTo).toHaveBeenCalledWith(0, 0);
});

test("it does not render if there are no posts", () => {
  render(<RenderWrapper posts={[]} />);

  expect(screen.queryByTestId("blog-post-item")).toBeNull();
});

test("it renders a blog post item for each post", () => {
  render(<RenderWrapper posts={blogPostListResult.posts} />);

  expect(screen.getAllByTestId("blog-post-item")).toHaveLength(
    blogPostListResult.posts.length
  );
});
