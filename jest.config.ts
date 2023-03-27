import type { Config } from "jest";
import nextJest from "next/jest";
import { pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  preset: "ts-jest",
  resetMocks: false,
  rootDir: ".",
  setupFiles: ["<rootDir>/jest.setup.ts", "jest-localstorage-mock"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
};

export default createJestConfig(config);
