import { NextApiRequest } from "next";
import { createMocks } from "node-mocks-http";

import { cors } from "./cors";

let originalAllowedOrigins: string | undefined;

/**
 * Setup some environment variables before running tests
 * and restore them after all tests are done.
 */
beforeAll(() => {
  originalAllowedOrigins = process.env.API_ALLOWED_ORIGINS;
});

afterAll(() => {
  process.env.API_ALLOWED_ORIGINS = originalAllowedOrigins;
});

test("should reject request with invalid origin", () => {
  const { req, res } = createMocks<NextApiRequest>({
    method: "GET",
    headers: {
      origin: "https://not-allowed-domain.com",
    },
  });

  process.env.API_ALLOWED_ORIGINS = "https://domain1.com,https://domain2.com";

  expect(cors(req, res)).rejects.toThrow("Not allowed by CORS");
});

test("should accept request with valid origin", () => {
  const { req, res } = createMocks<NextApiRequest>({
    method: "GET",
    headers: {
      origin: "https://domain1.com",
    },
  });

  process.env.API_ALLOWED_ORIGINS = "https://domain1.com,https://domain2.com";

  expect(cors(req, res)).resolves.toBeUndefined();
});
