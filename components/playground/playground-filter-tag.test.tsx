import { fireEvent, render, screen } from "@testing-library/react";

import { TechnologyTag } from "@/types/experiments";

import { PlaygroundFilterTag } from "./playground-filter-tag";

test("renders PlaygroundFilterTag with the correct label", () => {
  render(
    <PlaygroundFilterTag
      label={TechnologyTag.React}
      active={false}
      onClick={() => {}}
    />
  );
  const playgroundFilterTag = screen.getByTestId("playground-filter-tag");

  expect(playgroundFilterTag).toBeInTheDocument();
  expect(playgroundFilterTag).toHaveTextContent(TechnologyTag.React);
});

test("calls onClick when clicked", () => {
  const onClick = jest.fn();
  render(
    <PlaygroundFilterTag
      label={TechnologyTag.React}
      active={false}
      onClick={onClick}
    />
  );
  const playgroundFilterTag = screen.getByTestId("playground-filter-tag");

  fireEvent.click(playgroundFilterTag);

  expect(onClick).toHaveBeenCalled();
});
