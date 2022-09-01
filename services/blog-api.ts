import { BlogPostListResult } from "@/types/blog-api";
import useSWR from "swr";
import { POSTS_ENDPOINT } from "@/config/blog-api";

export class BlogApiService {
  private static async fetchData<T>(url: string): Promise<T> {
    const result = await fetch(url);
    return (await result.json()) as T;
  }

  public static getPostListUrl(page: number) {
    return `${POSTS_ENDPOINT}/pages/${page}.json`;
  }

  public static fetchPostList(page: number = 1): Promise<BlogPostListResult> {
    return this.fetchData<BlogPostListResult>(this.getPostListUrl(page));
  }

  public static usePostList = (page: number) => {
    const { data, error } = useSWR<BlogPostListResult>(
      this.getPostListUrl(page),
      this.fetchData
    );

    return {
      postList: data?.posts,
      page: data?.page,
      totalPosts: data?.totalPosts,
      isLoading: !error && !data,
      isError: error,
    };
  };
}
