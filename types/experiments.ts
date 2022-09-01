export enum TechnologyTag {
  ALL = "All",
  Angular = "Angular",
  React = "React",
  Svelte = "Svelte",
  Vue = "Vue",
  Vanilla_JS = "Vanilla JS",
  No_JS = "HTML/CSS only",
}

export const TechnologyTagsList = [
  TechnologyTag.ALL,
  TechnologyTag.Angular,
  TechnologyTag.React,
  TechnologyTag.Svelte,
  TechnologyTag.Vue,
  TechnologyTag.Vanilla_JS,
  TechnologyTag.No_JS,
];

export interface ExperimentData {
  img: string;
  title: string;
  url: string;
  tags: TechnologyTag[];
}
