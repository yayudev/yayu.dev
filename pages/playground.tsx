// noinspection JSUnusedGlobalSymbols

import { NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "../layouts/page";
import { Experiments } from "@/components/playground/experiments";
import { ExperimentData, experiments } from "../mocks/experiments";
import { useState } from "react";
import styled, { css } from "styled-components";
import { GlitchedText } from "@/components/shared/glitched-text";

const Content = styled.div`
  padding-top: 0;
`;

const SortingText = styled.div`
  width: 100%;
  color: var(--text-color);
  margin: 1rem 0 2rem;
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
  const [elements, setElements] = useState<ExperimentData[]>(experiments);
  const [currentSort, setCurrentSort] = useState<SortType>(
    SortType.BY_MOST_RECENT
  );

  function changeSort(sortType: SortType) {
    if (sortType === currentSort) {
      return;
    }

    setCurrentSort(sortType);

    if (sortType === SortType.BY_NAME) {
      const sortedElements = [...elements].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setElements(sortedElements);
      return;
    }

    setElements(experiments);
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

        <Experiments experiments={elements} />
      </Content>
    </PageLayout>
  );
};

export default Playground;
