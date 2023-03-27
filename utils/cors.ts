import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

import { NextMiddleware } from "@/types/next";

/**
 * Promisify the middleware so we can use it with async/await
 *
 * @param middleware The middleware to promisify
 */
const promisifyMiddleware =
  (middleware: NextMiddleware) => (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: unknown) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });

/**
 * CORS middleware.
 * Only allows requests from allowed origins.
 *
 * @param req The request object
 * @param res The response object
 */
export const cors = promisifyMiddleware(
  Cors({
    methods: ["GET"], // Specify allowed HTTP methods
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void
    ) => {
      const allowedOrigins = (process.env.API_ALLOWED_ORIGINS || "")
        .split(",")
        .map((orig) => orig.trim().toLocaleLowerCase());

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
