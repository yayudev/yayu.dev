import { fireEvent, render, screen } from "@testing-library/react";

import { mockExperiments } from "@/utils/mocks/experiments";

import { ExperimentItem } from "./experiment-item";

test("renders the experiment item", () => {
  render(<ExperimentItem experiment={mockExperiments[0]} onClick={() => {}} />);
  const experimentItem = screen.getByTestId("experiment-item");

  expect(experimentItem).toBeInTheDocument();
});

test("renders the experiment item label", () => {
  render(<ExperimentItem experiment={mockExperiments[0]} onClick={() => {}} />);
  const experimentItemLabel = screen.getByTestId("experiment-item__label");

  expect(experimentItemLabel).toBeInTheDocument();
  expect(experimentItemLabel).toHaveTextContent(mockExperiments[0].title);
});

test("should call the onClick function when the experiment item is clicked", () => {
  const onClick = jest.fn();
  render(<ExperimentItem experiment={mockExperiments[0]} onClick={onClick} />);
  const experimentItem = screen.getByTestId("experiment-item");

  fireEvent.click(experimentItem);

  expect(onClick).toHaveBeenCalled();
});
