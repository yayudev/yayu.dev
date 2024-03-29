import useSWR from "swr";

import { BlogPost, BlogPostListResult } from "@/types/blog-api";

import { DEFAULT_PAGE_SIZE } from "@/constants/blog";
import { POSTS_ENDPOINT } from "@/constants/blog-api";

export class BlogApiService {
  private async fetchData<T>(url: string): Promise<T> {
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error(result.statusText);
    }
    return (await result.json()) as T;
  }

  public getIndividualPostUrl(postId: string) {
    return `${POSTS_ENDPOINT}/${postId}`;
  }

  public getPostListUrl(page: number) {
    return `${POSTS_ENDPOINT}?skip=${(page - 1) * DEFAULT_PAGE_SIZE}&limit=10`;
  }

  public getPostListSizeUrl() {
    return `${POSTS_ENDPOINT}?skip=0&limit=0`;
  }

  public getAllPostsSlugsUrl() {
    return `${POSTS_ENDPOINT}/getAllSlugs`;
  }

  public fetchPostList(page: number = 1): Promise<BlogPostListResult> {
    return this.fetchData<BlogPostListResult>(this.getPostListUrl(page));
  }

  public fetchIndividualPost(postId: string): Promise<BlogPost> {
    return this.fetchData<BlogPost>(this.getIndividualPostUrl(postId));
  }

  public fetchAllPostsSlugs = async (): Promise<{
    slugs: string[];
    totalPosts: number;
  }> => {
    try {
      return await this.fetchData<{
        slugs: string[];
        totalPosts: number;
      }>(this.getAllPostsSlugsUrl());
    } catch (error) {
      console.log("error", error);
      return { slugs: [], totalPosts: 0 };
    }
  };

  public fetchPostListSize = async (): Promise<BlogPostListResult> => {
    try {
      return await this.fetchData<BlogPostListResult>(
        this.getPostListSizeUrl()
      );
    } catch (error) {
      console.log(error);
      return { posts: [], totalPosts: 0 };
    }
  };

  public usePostList = (page: number) => {
    const { data, error, isLoading } = useSWR<BlogPostListResult>(
      this.getPostListUrl(page),
      this.fetchData
    );

    return {
      postList: data?.posts,
      totalPosts: data?.totalPosts,
      isLoading: !error && !data && isLoading,
      isError: error,
    };
  };

  public useIndividualPost = (postId: string) => {
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

export const blogApiService = new BlogApiService();
