import { NextApiRequest, NextApiResponse } from "next";

import { BlogPostListResult } from "@/types/blog-api";

import { contentfulApiService } from "@/services/server/contentful";

import { cors } from "@/utils/cors";

export default async function getPostsListHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { skip = 0, limit = 10 } = req.query;
  const parsedSkip = parseInt(skip as string);
  const parsedLimit = parseInt(limit as string);

  try {
    await cors(req, res);

    const postsCollection: BlogPostListResult =
      await contentfulApiService.getPostsCollection({
        skip: parsedSkip,
        limit: parsedLimit,
      });

    res.status(200).json(postsCollection);
  } catch (error: any) {
    if (error?.sys?.id === "NotFound") {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(500).json({ message: "Server Error" });
  }
}
