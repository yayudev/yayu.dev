import { fireEvent, render, screen } from "@testing-library/react";

import { ExperimentData, TechnologyTag } from "@/types/experiments";

import { ExperimentItem } from "./experiment-item";

const mockExperiment: ExperimentData = {
  title: "Test",
  img: "https://via.placeholder.com/150",
  url: "https://google.com",
  tags: [TechnologyTag.Vanilla_JS],
};

test("renders the experiment item", () => {
  render(<ExperimentItem experiment={mockExperiment} onClick={() => {}} />);
  const experimentItem = screen.getByTestId("experiment-item");

  expect(experimentItem).toBeInTheDocument();
});

test("renders the experiment item label", () => {
  render(<ExperimentItem experiment={mockExperiment} onClick={() => {}} />);
  const experimentItemLabel = screen.getByTestId("experiment-item__label");

  expect(experimentItemLabel).toBeInTheDocument();
  expect(experimentItemLabel).toHaveTextContent("Test");
});

test("should call the onClick function when the experiment item is clicked", () => {
  const onClick = jest.fn();
  render(<ExperimentItem experiment={mockExperiment} onClick={onClick} />);
  const experimentItem = screen.getByTestId("experiment-item");

  fireEvent.click(experimentItem);

  expect(onClick).toHaveBeenCalled();
});
