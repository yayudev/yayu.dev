import "@testing-library/jest-dom";

process.env = {
  ...process.env,
  CONTENTFUL_SPACE_ID: "test",
  CONTENTFUL_ACCESS_TOKEN: "test",
};
