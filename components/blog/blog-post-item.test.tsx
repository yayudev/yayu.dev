import { blogPostListResult } from "@/__mock__/contentful";
import { render, screen } from "@testing-library/react";

import { BlogPostItem } from "@/components/blog/blog-post-item";

const blogPost = blogPostListResult.posts[0];

test("renders correctly", () => {
  render(<BlogPostItem post={blogPostListResult.posts[0]} />);

  expect(screen.getByTestId("blog-post-item")).toBeInTheDocument();
});

test("it renders the post title", () => {
  render(<BlogPostItem post={blogPost} />);
  const title = screen.getByTestId("blog-post-item__title");

  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent(blogPost.title as string);
});

test("it renders the post date", () => {
  render(<BlogPostItem post={blogPost} />);
  const date = screen.getByTestId("blog-post-item__date");

  expect(date).toBeInTheDocument();
  // Date is rendered using the i18n library, so we can't test the exact value
});

test("it renders the post excerpt", () => {
  render(<BlogPostItem post={blogPost} />);
  const excerpt = screen.getByTestId("blog-post-item__excerpt");

  expect(excerpt).toBeInTheDocument();
  expect(excerpt).toHaveTextContent(blogPost.excerpt as string);
});

test("it renders the post image", () => {
  render(<BlogPostItem post={blogPost} />);
  const image = screen.getByTestId("blog-post-item__image");

  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", blogPost.coverImage?.url as string);
});

test("it uses the post slug as the link href", () => {
  render(<BlogPostItem post={blogPost} />);
  const link = screen.getByTestId("blog-post-item__link");

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", `/blog/${blogPost.slug}`);
});
