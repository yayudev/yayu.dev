// noinspection JSUnusedGlobalSymbols

import { useMemo, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Experiments } from "@/components/playground/experiments";
import { ExperimentData, SortType, TechnologyTag } from "@/types/experiments";
import { PlaygroundSortingOptions } from "@/components/playground/playground-sorting-options";
import { PlaygroundFilterList } from "@/components/playground/playground-filter-list";
import { PageLayout } from "../layouts/page";
import { experiments } from "../mocks/experiments";

const Content = styled.div`
  padding-top: 0;
`;

const OptionsBar = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 1rem 0 1.5rem 0;
`;

const Playground: NextPage = () => {
  const [filterTag, setFilterTag] = useState<TechnologyTag>(TechnologyTag.ALL);
  const [currentSort, setCurrentSort] = useState<SortType>(
    SortType.BY_MOST_RECENT
  );

  // Only recompute if filter or sorting has changed
  const sortedList: ExperimentData[] = useMemo(() => {
    let activeElements: ExperimentData[] = experiments;

    if (filterTag && filterTag !== TechnologyTag.ALL) {
      activeElements = activeElements.filter((element) =>
        element.tags.includes(filterTag)
      );
    }

    if (currentSort === SortType.BY_NAME) {
      return [...activeElements].sort((a: ExperimentData, b: ExperimentData) =>
        a.title.localeCompare(b.title)
      );
    }

    return activeElements; // Active elements are date-sorted by default.
  }, [currentSort, filterTag]);

  function changeSort(sortType: SortType) {
    if (sortType === currentSort) return;

    setCurrentSort(sortType);
  }

  function toggleTag(tag: TechnologyTag) {
    // Reset if clicked on the active tag.
    if (tag === filterTag) {
      setFilterTag(TechnologyTag.ALL);
      return;
    }

    setFilterTag(tag);
  }

  return (
    <PageLayout title="Playground">
      <Head>
        <title>yayu.dev | Playground</title>
        <meta
          name="description"
          content="Quick experiments I do to learn and small PoCs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <OptionsBar>
          <PlaygroundSortingOptions
            currentSort={currentSort}
            onChange={changeSort}
          />
          <PlaygroundFilterList
            selectedTag={filterTag}
            onTagChange={toggleTag}
          />
        </OptionsBar>

        <Experiments experiments={sortedList} />
      </Content>
    </PageLayout>
  );
};

export default Playground;
