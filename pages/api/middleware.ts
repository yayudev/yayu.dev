import NextCors from "nextjs-cors";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const corsMiddleware: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const requestOrigin = req.headers.origin?.toLocaleLowerCase() || "";
  const allowedOrigins = (process.env.API_ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim().toLocaleLowerCase());

  if (!requestOrigin || !allowedOrigins.length) {
    return res.status(400).json({ message: "Origin header is required" });
  }

  if (!allowedOrigins.includes(requestOrigin)) {
    return res.status(401).json({ message: "Origin not allowed" });
  }

  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: requestOrigin,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  return res;
};
