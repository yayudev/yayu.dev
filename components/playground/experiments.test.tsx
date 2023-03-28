import { render, screen } from "@testing-library/react";

import { mockExperiments } from "@/utils/mocks/experiments";

import { Experiments } from "@/components/playground/experiments";

test("renders Experiments", () => {
  render(<Experiments experiments={mockExperiments} />);

  expect(screen.getByTestId("experiments")).toBeInTheDocument();
});

test("renders Experiments with correct number of experiments", () => {
  render(<Experiments experiments={mockExperiments} />);

  expect(screen.getAllByTestId("experiment-item")).toHaveLength(3);
});
