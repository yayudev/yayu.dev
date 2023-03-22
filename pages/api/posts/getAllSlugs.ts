import { NextApiRequest, NextApiResponse } from "next";

import { BlogPostListResult } from "@/types/blog-api";

import { contentfulApiService } from "@/services/server/contentful";

import { cors } from "@/utils/cors";

export default async function getAllSlugsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await cors(req, res);

    const postsCollection: BlogPostListResult =
      await contentfulApiService.getPostsCollection({ limit: 1000 });

    const slugs = postsCollection.posts.map((item) => item.slug);

    return res.status(200).json({
      slugs,
      totalPosts: postsCollection.totalPosts,
    });
  } catch (error: any) {
    console.error(error);

    if (error?.sys?.id === "NotFound") {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(500).json({ message: "Server Error" });
  }
}
