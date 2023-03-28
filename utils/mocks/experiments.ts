import { ExperimentData, TechnologyTag } from "@/types/experiments";

export const mockExperiments: ExperimentData[] = [
  {
    title: "Experiment 1",
    img: "https://via.placeholder.com/150",
    url: "https://example.com",
    tags: [TechnologyTag.Angular],
  },
  {
    title: "Experiment 2",
    img: "https://via.placeholder.com/150",
    url: "https://example.com",
    tags: [TechnologyTag.Angular, TechnologyTag.React],
  },
  {
    title: "Experiment 3",
    img: "https://via.placeholder.com/150",
    url: "https://example.com",
    tags: [TechnologyTag.Angular, TechnologyTag.React, TechnologyTag.Svelte],
  },
];
