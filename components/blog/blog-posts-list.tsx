import { BlogPost } from "@/types/blog-api";

import { BlogPostItem } from "@/components/blog/blog-post-item";
import { Ref, useEffect, useRef } from "react";

interface BlogPostsListProps {
  ref?: Ref<HTMLElement>;
  posts: BlogPost[];
}

export function BlogPostsList({ posts }: BlogPostsListProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === undefined) return;

    (window as any).document.querySelector("#page-content").scrollTo(0, 0);
  }, [posts]);

  if (!posts.length) return null;

  return (
    <section ref={ref}>
      {posts.map((post) => (
        <BlogPostItem key={post?.slug} post={post} />
      ))}
    </section>
  );
}
