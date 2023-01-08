import useSWR from "swr";
import { BlogPost, BlogPostListResult } from "@/types/blog-api";
import { POSTS_ENDPOINT } from "@/config/blog-api";

export class BlogApiService {
  private static async fetchData<T>(url: string): Promise<T> {
    const result = await fetch(url);
    return (await result.json()) as T;
  }

  public static getIndividualPostUrl(postId: string) {
    return `${POSTS_ENDPOINT}/${postId}.json`;
  }

  public static getPostListUrl(page: number) {
    return `${POSTS_ENDPOINT}/pages/${page}.json`;
  }

  public static fetchPostList(page: number = 1): Promise<BlogPostListResult> {
    return this.fetchData<BlogPostListResult>(this.getPostListUrl(page));
  }

  public static fetchIndividualPost(postId: string): Promise<BlogPost> {
    return this.fetchData<BlogPost>(this.getIndividualPostUrl(postId));
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

  public static useIndividualPost = (postId: string) => {
    const { data, error } = useSWR<BlogPost>(
      this.getIndividualPostUrl(postId),
      this.fetchData
    );

    return {
      post: data,
      isLoading: !error && !data,
      isError: error,
    };
  };
}
