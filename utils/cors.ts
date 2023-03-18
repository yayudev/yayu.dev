import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

type Middleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  callback: (result: unknown) => void
) => void;

const initMiddleware =
  (middleware: Middleware) => (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: unknown) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });

export const cors = initMiddleware(
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
