import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  resetMocks: false,
  setupFiles: ["jest-localstorage-mock"],
};

export default config;
