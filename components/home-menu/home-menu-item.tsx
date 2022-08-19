import { MutableRefObject, ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";

import { useHover } from "@/hooks/use-hover";
import { HomeMenuItemUnderline } from "./home-menu-item-underline";
import { GlitchedText } from "./glitched-text";

interface HomeMenuItemProps {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
}

const MenuLink = styled.a`
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
      <Link href={href} passHref>
        <MenuLink ref={hoverRef as MutableRefObject<HTMLAnchorElement | null>}>
          <GlitchedText animate={isHovered}>{children}</GlitchedText>
        </MenuLink>
      </Link>
    );
  }

  if (onClick) {
    link = (
      <MenuLink
        ref={hoverRef as MutableRefObject<HTMLAnchorElement | null>}
        onClick={onClick}
      >
        <GlitchedText animate={isHovered}>{children}</GlitchedText>
      </MenuLink>
    );
  }

  return (
    <>
      {link}
      <HomeMenuItemUnderline active={isHovered} />
    </>
  );
}
