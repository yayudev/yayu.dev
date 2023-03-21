import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useMemo, useState } from "react";
import styled from "styled-components";

import { ExperimentData, SortType, TechnologyTag } from "@/types/experiments";

import { MEDIA_QUERY_TABLET } from "@/constants/media-queries";
import { experiments } from "@/data/experiments";

import { Experiments } from "@/components/playground/experiments";
import { PlaygroundFilterList } from "@/components/playground/playground-filter-list";
import { PlaygroundSortingOptions } from "@/components/playground/playground-sorting-options";
import { PageLayout } from "@/layouts/page";

const Content = styled.div`
  padding-top: 0;
`;

const OptionsBar = styled.div`
  width: 100%;
  display: flex;
  position: sticky;
  background-color: var(--background-for-content);
  z-index: 3;
  top: 0;
  left: 0;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem 0;
  flex-direction: column;
  place-items: center;

  ${MEDIA_QUERY_TABLET} {
    position: initial;
  }
`;

export async function getStaticProps({ locale }: { locale: string }) {
  if (!locale) return { props: {} };

  const props = await serverSideTranslations(locale, [
    "common",
    "settings",
    "playground",
  ]);

  return { props };
}

const Playground: NextPage = () => {
  const { t } = useTranslation();
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
    const updatedTag = tag === filterTag ? TechnologyTag.ALL : tag;

    setFilterTag(updatedTag);
  }

  return (
    <PageLayout title={t("playground:title")}>
      <Head>
        <title>{t("playground:page-title")}</title>
        <meta
          name="description"
          content={t("playground:page-description") ?? ""}
        />
        <meta property="og:title" content={t("playground:page-title") ?? ""} />
        <meta
          property="og:description"
          content={t("playground:page-description") ?? ""}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <OptionsBar>
          <PlaygroundFilterList
            selectedTag={filterTag}
            onTagChange={toggleTag}
          />

          <PlaygroundSortingOptions
            currentSort={currentSort}
            onChange={changeSort}
          />
        </OptionsBar>

        <Experiments experiments={sortedList} />
      </Content>
    </PageLayout>
  );
};

export default Playground;
