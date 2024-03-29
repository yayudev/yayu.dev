import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { TechnologyTag } from "@/types/experiments";

import { TechnologyTagsList } from "@/constants/experiments";

import { PlaygroundFilterTag } from "@/components/playground/playground-filter-tag";

interface PlaygroundFilterProps {
  selectedTag: TechnologyTag;
  onTagChange: (tag: TechnologyTag) => void;
}

const Container = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

export function PlaygroundFilterList({
  selectedTag,
  onTagChange,
}: PlaygroundFilterProps) {
  const { t } = useTranslation();

  return (
    <Container data-testid="playground-filter-list">
      {TechnologyTagsList.map((tag: TechnologyTag) => (
        <PlaygroundFilterTag
          key={tag}
          label={t(`playground:${tag}`)}
          active={selectedTag === tag}
          onClick={() => onTagChange(tag)}
        />
      ))}
    </Container>
  );
}
