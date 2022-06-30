import styled from "styled-components";
import { useTranslation } from 'next-i18next';

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

export function HomeMenu() {
  const { t } = useTranslation('home');

  return (
    <nav>
      <MenuList>
        <HomeMenuItem href="/blog">{t('blog')}</HomeMenuItem>
        <HomeMenuItem href="/experiments">{t('experiments')}</HomeMenuItem>
        <HomeMenuItem href="/projects">{t('projects')}</HomeMenuItem>
        <HomeMenuItem href="/settings">{t('settings')}</HomeMenuItem>
        <HomeMenuItem href="/about">{t('about')}</HomeMenuItem>
      </MenuList>
    </nav>
  );
}
