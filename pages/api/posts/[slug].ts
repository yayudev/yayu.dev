import { NextApiRequest, NextApiResponse } from "next";

import { BlogPost } from "@/types/blog-api";

import { contentfulApiService } from "@/services/server/contentful";

import { cors } from "@/utils/cors";

export default async function getPostsBySlugHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let slug = req.query.slug;

  // Missing query param
  if (!slug || slug.length === 0) {
    return res.status(400).json({ message: "Slug is required" });
  }

  // If slug is an array, only accept the first value (e.g. /posts/[slug])
  if (Array.isArray(slug)) {
    slug = slug[0];
  }

  try {
    await cors(req, res);

    const entry = await contentfulApiService.getPostBySlug(slug);

    if (!entry) {
      return res.status(404).json({ message: "Post not found" });
    }

    const blogPost = {
      ...entry,
      sys: undefined,
    } as BlogPost;

    return res.status(200).json(blogPost);
  } catch (error: any) {
    if (error?.sys?.id === "NotFound") {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(500).json({ message: "Server Error" });
  }
}
