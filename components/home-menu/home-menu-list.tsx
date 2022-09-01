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
        <HomeMenuItem key="blog" href="/blog">
          Blog
        </HomeMenuItem>
        <HomeMenuItem key="playground" href="/playground">
          Playground
        </HomeMenuItem>
        <HomeMenuItem key="settings" onClick={openSettings}>
          Settings
        </HomeMenuItem>
        <HomeMenuItem key="about" href="/about">
          About
        </HomeMenuItem>
      </MenuList>
    </nav>
  );
}
