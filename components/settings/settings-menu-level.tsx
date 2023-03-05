import { ReactNode } from "react";
import styled from "styled-components";

type SettingsMenuLevelProps = {
  isChildMenu?: boolean;
  children: ReactNode;
};

const Container = styled.div`
  display: flex;
  height: fit-content;
`;

const ListContainer = styled.ul<{ isChildMenu?: boolean }>`
  display: block;
  width: ${(props) => (props.isChildMenu ? "500px" : "300px")};
  list-style: none;
  padding: 0;
  margin: 0;
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
    <Container>
      <LeftBlock />

      <ListContainer isChildMenu={isChildMenu}>{children}</ListContainer>
    </Container>
  );
}
