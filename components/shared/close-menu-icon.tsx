import styled from "styled-components";

import { MEDIA_QUERY_TABLET } from "@/config/media-queries";

interface HomeMenuIconProps {
  showCloseIcon?: boolean;
  onClick?: () => void;
}

const Container = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 99;
  display: none;

  ${MEDIA_QUERY_TABLET} {
    display: block;
  }
`;

const Bar = styled.div`
  width: 55px;
  height: 10px;
  background-color: var(--active-selection);
  opacity: 0.75;
  margin-bottom: 5px;
  border-radius: 4px;
  transform: scaleX(0.9);
  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
`;

const TopBar = styled(Bar)<{ active: boolean }>`
  transform-origin: top left;

  ${(props) => (props.active ? "transform: rotateZ(45deg) scaleX(1.2);" : "")}
`;

const MiddleBar = styled(Bar)<{ active: boolean }>`
  transform-origin: left;

  ${(props) => (props.active ? "opacity: 0;" : "")}
`;

const BottomBar = styled(Bar)<{ active: boolean }>`
  transform-origin: bottom left;

  ${(props) =>
    props.active
      ? "transform: rotateZ(-45deg) translate(-8px, 10px) scaleX(1.2);"
      : ""}
`;

export function CloseMenuIcon({
  showCloseIcon = false,
  onClick,
}: HomeMenuIconProps) {
  return (
    <Container onClick={onClick}>
      <TopBar active={showCloseIcon} />
      <MiddleBar active={showCloseIcon} />
      <BottomBar active={showCloseIcon} />
    </Container>
  );
}
