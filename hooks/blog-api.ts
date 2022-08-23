import useSWR from "swr";
import { POSTS_ENDPOINT } from "@/config/blog-api";
import { BlogPostListResult } from "@/types/blog-api";

function fetcher<T>(url: string): Promise<T> {
  return fetch(url, {}).then((res) => res.json());
}

export function usePostsList(page = 1) {
  const { data, error } = useSWR<BlogPostListResult>(
    `${POSTS_ENDPOINT}/pages/${page}.json`,
    fetcher
  );

  return {
    postList: data,
    isLoading: !error && !data,
    isError: error,
  };
}
