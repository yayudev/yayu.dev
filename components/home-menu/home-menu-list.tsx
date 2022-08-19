import { useContext } from "react";
import styled from "styled-components";
import {
  ApplicationStateContext,
  ApplicationStateContextType,
} from "@/contexts/application-state";
import { HomeMenuItem } from "./home-menu-item";

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export function HomeMenuList() {
  const { applicationState, setApplicationState } =
    useContext<ApplicationStateContextType>(ApplicationStateContext);

  function openSettings() {
    if (!applicationState) return;

    setApplicationState({ ...applicationState, showSettings: true });
  }

  return (
    <nav>
      <MenuList>
        <HomeMenuItem href="/blog">Blog</HomeMenuItem>
        <HomeMenuItem href="/playground">Playground</HomeMenuItem>
        <HomeMenuItem href="/projects">Projects</HomeMenuItem>
        <HomeMenuItem onClick={openSettings}>Settings</HomeMenuItem>
        <HomeMenuItem href="/about">About</HomeMenuItem>
      </MenuList>
    </nav>
  );
}
