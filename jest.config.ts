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
  setupFiles: ["jest-localstorage-mock"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
};

export default createJestConfig(config);
