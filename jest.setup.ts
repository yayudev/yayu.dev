import "@testing-library/jest-dom";

process.env = {
  ...process.env,
  CONTENTFUL_SPACE_ID: "test",
  CONTENTFUL_ACCESS_TOKEN: "test",
};

jest.mock("next-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

// Mock scrollTo for tests
Element.prototype.scrollTo = jest.fn();
