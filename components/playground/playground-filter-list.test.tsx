import { render, screen } from "@testing-library/react";

import { TechnologyTag } from "@/types/experiments";

import { PlaygroundFilterList } from "./playground-filter-list";

test("renders PlaygroundFilterList", () => {
  render(
    <PlaygroundFilterList
      selectedTag={TechnologyTag.React}
      onTagChange={test}
    />
  );

  expect(screen.getByTestId("playground-filter-list")).toBeInTheDocument();
});

test("renders PlaygroundFilterList with correct number of tags", () => {
  render(
    <PlaygroundFilterList
      selectedTag={TechnologyTag.React}
      onTagChange={test}
    />
  );

  expect(screen.getAllByTestId("playground-filter-tag")).toHaveLength(7);
  expect(
    screen.getByText(`playground:${TechnologyTag.ALL}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`playground:${TechnologyTag.React}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`playground:${TechnologyTag.Vanilla_JS}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`playground:${TechnologyTag.Angular}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`playground:${TechnologyTag.No_JS}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`playground:${TechnologyTag.Svelte}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`playground:${TechnologyTag.Vue}`)
  ).toBeInTheDocument();
});
