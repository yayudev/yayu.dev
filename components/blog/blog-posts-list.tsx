import { BlogPost } from "@/types/blog-api";

import { BlogPostItem } from "@/components/blog/blog-post-item";

interface BlogPostsListProps {
  posts: BlogPost[];
}

export function BlogPostsList({ posts }: BlogPostsListProps) {
  useEffect(() => {
    if (typeof window === undefined) return;

    (window as any).document.querySelector("#page-content").scrollTo(0, 0);
  }, [posts]);

  if (!posts.length) return null;

  return (
    <section>
      {posts.map((post) => (
        <BlogPostItem key={post?.slug} post={post} />
      ))}
    </section>
  );
}
