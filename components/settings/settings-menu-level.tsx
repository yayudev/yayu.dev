import { ReactNode } from "react";
import styled from "styled-components";

import { MEDIA_QUERY_TABLET } from "@/config/media-queries";

interface SettingsMenuLevelProps {
  isChildMenu?: boolean;
  children: ReactNode;
}

const Container = styled.div<SettingsMenuLevelProps>`
  display: flex;
  height: fit-content;
  margin-bottom: ${({ isChildMenu }) => (isChildMenu ? "1rem" : "0")};

  ${MEDIA_QUERY_TABLET} {
    width: 100%;
  }
`;

const ListContainer = styled.ul<SettingsMenuLevelProps>`
  display: block;
  width: ${({ isChildMenu }) => (isChildMenu ? "500px" : "300px")};
  list-style: none;
  padding: 0;
  margin: 0;

  ${MEDIA_QUERY_TABLET} {
    width: 100%;
  }
`;

const LeftBlock = styled.div`
  display: block;
  width: 10px;
  background-color: var(--item-background);
  position: relative;
  margin-right: 20px;

  &:before {
    content: "";
    display: block;
    width: 3px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 13px;
    background-color: var(--item-background);
  }
`;

export function SettingsMenuLevel({
  children,
  isChildMenu = false,
}: SettingsMenuLevelProps) {
  return (
    <Container isChildMenu={isChildMenu}>
      <LeftBlock />

      <ListContainer isChildMenu={isChildMenu}>{children}</ListContainer>
    </Container>
  );
}
