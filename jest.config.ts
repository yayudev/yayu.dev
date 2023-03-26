import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

const config: Config = {
  rootDir: ".",
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  resetMocks: false,
  setupFiles: ["jest-localstorage-mock", "./jest.setup.ts"],
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths
    /*, { prefix: '<rootDir>/' } */
  ),
};

export default config;
