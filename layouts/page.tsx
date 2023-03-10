import { ReactNode, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorMessage } from "@/components/shared/error-message";
import { Loader } from "@/components/shared/loader";
import { MEDIA_QUERY_TABLET } from "@/config/media-queries";

const Container = styled.div`
  width: 100%;
  padding: 1rem 3% 2rem 3%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  background: var(--background-for-content);
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERY_TABLET} {
    padding-top: 3.5rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled(motion.h1)<{ $isAestheticTitle: boolean }>`
  color: var(--text-color);
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0.5rem 0 1rem;
  letter-spacing: ${(props) => (props.$isAestheticTitle ? "0.4rem" : "0")};
  transform-origin: left;
  text-align: ${(props) => (props.$isAestheticTitle ? "start" : "center")};
  will-change: transfom, opacity;
`;

const Subtitle = styled(motion.h4)`
  color: var(--text-color);
  font-size: 1.25rem;
  margin: 1rem 0.5rem 1rem;
  letter-spacing: 0.1rem;
  transform-origin: left;
  will-change: transfom, opacity;
`;

const Content = styled(motion.div)`
  width: 100%;
  max-width: 100%;
  flex: 1;
  overflow-y: auto;
  transform-origin: top;
  will-change: transform, opacity;
`;

export interface PageLayoutProps {
  title: string;
  isAestheticTitle?: boolean;
  subtitle?: string;
  isLoading?: boolean;
  hasError?: boolean;
  children: ReactNode;
}

export function PageLayout({
  title,
  subtitle,
  isAestheticTitle = true,
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
            $isAestheticTitle={isAestheticTitle}
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

        {!isLoading && !hasError && (
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
