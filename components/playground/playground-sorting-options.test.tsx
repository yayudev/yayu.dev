import { render, screen } from "@testing-library/react";

import { SortType } from "@/types/experiments";

import { PlaygroundSortingOptions } from "@/components/playground/playground-sorting-options";

test("renders the playground sorting options", () => {
  render(
    <PlaygroundSortingOptions
      currentSort={SortType.BY_MOST_RECENT}
      onChange={() => {}}
    />
  );

  expect(screen.getByTestId("playground-sorting-options")).toBeInTheDocument();
});

test("renders the playground sorting options most recent button", () => {
  render(
    <PlaygroundSortingOptions
      currentSort={SortType.BY_MOST_RECENT}
      onChange={() => {}}
    />
  );

  expect(
    screen.getByTestId("playground-sorting-options__most-recent")
  ).toBeInTheDocument();
});

test("renders the playground sorting options name button", () => {
  render(
    <PlaygroundSortingOptions
      currentSort={SortType.BY_MOST_RECENT}
      onChange={() => {}}
    />
  );

  expect(
    screen.getByTestId("playground-sorting-options__name")
  ).toBeInTheDocument();
});

test("it calls the onChange function when the most recent button is clicked", () => {
  const onChange = jest.fn();
  render(
    <PlaygroundSortingOptions
      currentSort={SortType.BY_NAME}
      onChange={onChange}
    />
  );

  screen.getByTestId("playground-sorting-options__most-recent").click();

  expect(onChange).toHaveBeenCalledWith(SortType.BY_MOST_RECENT);
});

test("it calls the onChange function when the by name button is clicked", () => {
  const onChange = jest.fn();
  render(
    <PlaygroundSortingOptions
      currentSort={SortType.BY_MOST_RECENT}
      onChange={onChange}
    />
  );

  screen.getByTestId("playground-sorting-options__name").click();

  expect(onChange).toHaveBeenCalledWith(SortType.BY_NAME);
});
