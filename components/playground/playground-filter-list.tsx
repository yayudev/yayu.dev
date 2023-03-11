import styled from "styled-components";
import { useTranslation } from "next-i18next";

import { PlaygroundFilterTag } from "@/components/playground/playground-filter-tag";
import { TechnologyTag, TechnologyTagsList } from "@/types/experiments";

export interface PlaygroundFilterProps {
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
  const { t } = useTranslation("playground");

  return (
    <Container>
      {TechnologyTagsList.map((tag: TechnologyTag) => (
        <PlaygroundFilterTag
          key={tag}
          label={t(tag)}
          active={selectedTag === tag}
          onClick={() => onTagChange(tag)}
        />
      ))}
    </Container>
  );
}
