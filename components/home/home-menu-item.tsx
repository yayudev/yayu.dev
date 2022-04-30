import { MutableRefObject } from "react";
import Link from "next/link";
import styled from "styled-components";

import { useHover } from "../../hooks/use-hover";
import { HomeMenuItemUnderline } from "./home-menu-item-underline";

interface HomeMenuItemProps {
  href: string;
  children: React.ReactNode;
}

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0.5rem 0;
  cursor: pointer;
  color: var(--link-color);
  font-size: 2rem;
`;

export function HomeMenuItem({ href, children }: HomeMenuItemProps) {
  const [hoverRef, isHovered] = useHover();

  return (
    <>
      <Link href={href} passHref>
        <MenuLink ref={hoverRef as MutableRefObject<HTMLAnchorElement | null>}>
          {children}
        </MenuLink>
      </Link>

      <HomeMenuItemUnderline active={isHovered} />
    </>
  );
}
