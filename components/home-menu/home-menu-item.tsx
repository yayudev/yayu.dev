import Link from "next/link";
import { MutableRefObject, ReactNode } from "react";
import styled from "styled-components";

import { useHover } from "@/hooks/use-hover";

import { HomeMenuItemUnderline } from "@/components/home-menu/home-menu-item-underline";
import { GlitchedText } from "@/components/shared/glitched-text";

interface HomeMenuItemProps {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
}

const MenuLink = styled(Link)`
  text-decoration: none;
  margin: 0.5rem 0;
  cursor: pointer;
  color: var(--link-color);
  font-size: 2rem;
  transform-origin: top;
`;

const MenuLinkAnchor = styled.a`
  text-decoration: none;
  margin: 0.5rem 0;
  cursor: pointer;
  color: var(--link-color);
  font-size: 2rem;
  transform-origin: top;
`;

export function HomeMenuItem({ href, children, onClick }: HomeMenuItemProps) {
  const [hoverRef, isHovered] = useHover();

  let link;

  if (href) {
    link = (
      <MenuLink
        href={href}
        ref={hoverRef as MutableRefObject<HTMLAnchorElement | null>}
      >
        <GlitchedText animate={isHovered}>{children}</GlitchedText>
      </MenuLink>
    );
  }

  if (onClick) {
    link = (
      <MenuLinkAnchor
        ref={hoverRef as MutableRefObject<HTMLAnchorElement | null>}
        onClick={onClick}
      >
        <GlitchedText animate={isHovered}>{children}</GlitchedText>
      </MenuLinkAnchor>
    );
  }

  return (
    <>
      {link}
      <HomeMenuItemUnderline active={isHovered} />
    </>
  );
}
