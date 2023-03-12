import { BlogPost } from "@/types/blog-api";

import { BlogPostItem } from "@/components/blog/blog-post-item";

interface BlogPostsListProps {
  posts: BlogPost[];
}

export function BlogPostsList({ posts }: BlogPostsListProps) {
  return (
    <section>
      {posts.map((post) => (
        <BlogPostItem key={post.id} post={post} />
      ))}
    </section>
  );
}
