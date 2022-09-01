// noinspection JSUnusedGlobalSymbols

import { useMemo, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import styled, { css } from "styled-components";
import { Experiments } from "@/components/playground/experiments";
import { GlitchedText } from "@/components/shared/glitched-text";
import { ExperimentData, TechnologyTag } from "@/types/experiments";
import { PageLayout } from "../layouts/page";
import { experiments } from "../mocks/experiments";
import { PlaygroundFilterList } from "@/components/playground/playground-filter-list";

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

const SortingText = styled.div`
  color: var(--text-color);
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  text-align: right;
  font-weight: bold;
`;

const Button = styled.div<{ active: boolean }>`
  background: none;
  display: inline-block;
  color: var(--clickable-link-color);
  border: none;
  cursor: pointer;

  ${(props) =>
    props.active
      ? css`
          color: var(--active-selection);
          cursor: initial;
        `
      : ""}
`;

enum SortType {
  BY_MOST_RECENT,
  BY_NAME,
}

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
        {/* TODO: Refactor this into a component */}
        <OptionsBar>
          <SortingText>
            <span>Sort by </span>
            <Button
              active={currentSort === SortType.BY_MOST_RECENT}
              onClick={() => changeSort(SortType.BY_MOST_RECENT)}
            >
              {currentSort === SortType.BY_MOST_RECENT ? (
                <GlitchedText animate={currentSort === SortType.BY_MOST_RECENT}>
                  Most Recent
                </GlitchedText>
              ) : (
                "Most Recent"
              )}
            </Button>
            <span> | </span>
            <Button
              active={currentSort === SortType.BY_NAME}
              onClick={() => changeSort(SortType.BY_NAME)}
            >
              {currentSort === SortType.BY_NAME ? (
                <GlitchedText animate={currentSort === SortType.BY_NAME}>
                  Name
                </GlitchedText>
              ) : (
                "Name"
              )}
            </Button>
          </SortingText>

          <PlaygroundFilterList
            selectedTag={filterTag}
            onTagChange={toggleTag}
          />
        </OptionsBar>

        {/* TODO: Handle empty state */}
        <Experiments experiments={sortedList} />
      </Content>
    </PageLayout>
  );
};

export default Playground;
