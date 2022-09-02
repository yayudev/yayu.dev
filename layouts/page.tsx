import { ReactNode, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorMessage } from "@/components/shared/error-message";
import { Loader } from "@/components/shared/loader";

const Container = styled.div`
  width: 100%;
  padding: 3%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  background: var(--background-for-content);
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled(motion.h1)`
  color: var(--text-color);
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0.5rem 0 1rem;
  letter-spacing: 0.5rem;
  transform-origin: left;
  will-change: transfom, opacity; ;
`;

const Subtitle = styled(motion.h4)`
  color: var(--text-color);
  font-size: 1.25rem;
  margin: 1rem 0.5rem;
  letter-spacing: 0.1rem;
  transform-origin: left;
  will-change: transfom, opacity; ;
`;

const Content = styled(motion.div)`
  width: 100%;
  flex: 1;
  transform-origin: top;
  will-change: transform, opacity;
`;

export interface PageLayoutProps {
  title: string;
  subtitle?: string;
  isLoading?: boolean;
  hasError?: boolean;
  children: ReactNode;
}

export function PageLayout({
  title,
  subtitle,
  isLoading = false,
  hasError = false,
  children,
}: PageLayoutProps) {
  const { query, pathname } = useRouter();
  const containerElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerElement.current?.scrollTo(0, 0);
  }, [pathname, query]);

  return (
    <Container ref={containerElement} id="app-container">
      <AnimatePresence>
        <TitleContainer>
          <Title
            key="title"
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
          {subtitle && (
            <Subtitle
              key="subtitle"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              {subtitle}
            </Subtitle>
          )}
        </TitleContainer>

        {isLoading && (
          <Content key="content-loading">
            <Loader />
          </Content>
        )}

        {!isLoading && hasError && (
          <Content key="content-error">
            <ErrorMessage />
          </Content>
        )}

        {!isLoading && (
          <Content
            key="content-loaded"
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
        )}
      </AnimatePresence>
    </Container>
  );
}
