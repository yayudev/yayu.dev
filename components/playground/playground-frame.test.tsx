import { render, screen } from "@testing-library/react";

import { mockExperiments } from "@/utils/mocks/experiments";

import { PlaygroundFrame } from "./playground-frame";

test("renders the playground frame", () => {
  render(
    <PlaygroundFrame experiment={mockExperiments[0]} onClose={() => {}} />
  );

  expect(screen.getByTestId("playground-frame")).toBeInTheDocument();
});

test("renders the playground frame title", () => {
  render(
    <PlaygroundFrame experiment={mockExperiments[0]} onClose={() => {}} />
  );

  expect(screen.getByTestId("playground-frame__title")).toBeInTheDocument();
});

test("renders the playground frame link", () => {
  render(
    <PlaygroundFrame experiment={mockExperiments[0]} onClose={() => {}} />
  );

  expect(screen.getByTestId("playground-frame__link")).toBeInTheDocument();
});

test("renders the playground frame iframe", () => {
  render(
    <PlaygroundFrame experiment={mockExperiments[0]} onClose={() => {}} />
  );

  expect(screen.getByTestId("playground-frame__iframe")).toBeInTheDocument();
});

test("renders the playground frame iframe with the correct src", () => {
  render(
    <PlaygroundFrame experiment={mockExperiments[0]} onClose={() => {}} />
  );

  expect(screen.getByTestId("playground-frame__iframe")).toHaveAttribute(
    "src",
    mockExperiments[0].url
  );
});

test("calls the onClose function when the frame is clicked", () => {
  const onClose = jest.fn();
  render(<PlaygroundFrame experiment={mockExperiments[0]} onClose={onClose} />);

  screen.getByTestId("playground-frame").click();

  expect(onClose).toHaveBeenCalled();
});
