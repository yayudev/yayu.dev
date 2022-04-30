import styled from "styled-components";
import { HomeMenuItem } from "./home-menu-item";

const Container = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export function HomeMenu() {
  return (
    <Container>
      <MenuList>
        <HomeMenuItem href="/blog">Blog</HomeMenuItem>
        <HomeMenuItem href="/experiments">Experiments</HomeMenuItem>
        <HomeMenuItem href="/projects">Projects</HomeMenuItem>
        <HomeMenuItem href="/settings">Settings</HomeMenuItem>
        <HomeMenuItem href="/about">About</HomeMenuItem>
      </MenuList>
    </Container>
  );
}
