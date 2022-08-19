import { ReactNode } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  padding: 5%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Title = styled(motion.h1)`
  color: var(--text-color);
  font-size: 3.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
  letter-spacing: 0.5rem;
  transform-origin: left;
  will-change: transfom, opacity; ;
`;

export const Content = styled(motion.div)`
  width: 100%;
  transform-origin: top;
  will-change: transform, opacity;
`;

export interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <Container>
      <AnimatePresence>
        <Title
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {title}
        </Title>
        <Content
          initial={{ opacity: 0, translateY: 25 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: -25 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {children}
        </Content>
      </AnimatePresence>
    </Container>
  );
}
