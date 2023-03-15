import { BlogPost } from "@/types/blog-api";

import { BlogPostItem } from "@/components/blog/blog-post-item";

interface BlogPostsListProps {
  posts: BlogPost[];
}

export function BlogPostsList({ posts }: BlogPostsListProps) {
  if (!posts.length) return null;

  return (
    <section>
      {posts.map((post) => (
        <BlogPostItem key={post?.slug} post={post} />
      ))}
    </section>
  );
}
