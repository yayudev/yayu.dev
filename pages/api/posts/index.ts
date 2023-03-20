import { NextApiRequest, NextApiResponse } from "next";

import { contentfulApiService } from "@/services/server/contentful";
import { BlogPostListResult } from "@/types/blog-api";
import { cors } from "@/utils/cors";

export default async function getPostsListHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { skip = 0, limit = 10, allSlugs } = req.query;
  const parsedSkip = parseInt(skip as string);
  const parsedLimit = parseInt(limit as string);

  try {
    await cors(req, res);

    const postsCollection: BlogPostListResult =
      await contentfulApiService.getPostsCollection({
        skip: allSlugs ? undefined : parsedSkip,
        limit: allSlugs ? undefined : parsedLimit,
      });

    // Post not found
    if (!postsCollection) {
      return res.status(404).json({ message: "Posts not found" });
    }

    if (allSlugs === "true") {
      const slugs = postsCollection.posts.map((item) => item.slug);
      return res.status(200).json(slugs);
    }

    res.status(200).json(postsCollection);
  } catch (error: any) {
    console.error(error);

    if (error?.sys?.id === "NotFound") {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(500).json({ message: "Server Error" });
  }
}
