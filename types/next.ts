import { NextApiRequest, NextApiResponse } from "next";

export type NextMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  callback: (result: unknown) => void
) => void;
