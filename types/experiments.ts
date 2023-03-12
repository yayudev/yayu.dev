export enum TechnologyTag {
  ALL = "all",
  Angular = "angular",
  React = "react",
  Svelte = "svelte",
  Vue = "vue",
  Vanilla_JS = "vanilla-js",
  No_JS = "html-css",
}

export enum SortType {
  BY_MOST_RECENT,
  BY_NAME,
}

export type ExperimentData = {
  img: string;
  title: string;
  url: string;
  tags: TechnologyTag[];
};
