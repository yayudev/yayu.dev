import useSWR from "swr";
import { POSTS_ENDPOINT } from "@/config/blog-api";
import { BlogPostListResult } from "@/types/blog-api";

export function blogApiFetcher<T>(url: string): Promise<T> {
  return fetch(url, {}).then((res) => res.json());
}

export function getUrlForBlogPost(id: string): string {
  return `${POSTS_ENDPOINT}/posts/${id}.json`;
}

export function usePostsList(page = 1) {
  const { data, error } = useSWR<BlogPostListResult>(
    `${POSTS_ENDPOINT}/pages/${page}.json`,
    blogApiFetcher
  );

  return {
    postList: data?.posts,
    page: data?.page,
    totalPosts: data?.totalPosts,
    isLoading: !error && !data,
    isError: error,
  };
}
