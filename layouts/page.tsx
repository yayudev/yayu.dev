import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";

import {
  MEDIA_QUERY_PHONE,
  MEDIA_QUERY_TABLET,
} from "@/constants/media-queries";

import { useAnimationsEnabled } from "@/hooks/use-animations-enabled";

import { ErrorMessage } from "@/components/shared/error-message";
import { Loader } from "@/components/shared/loader";

const Container = styled.div`
  width: 100%;
  padding: 1rem 0 2rem 0;
  position: relative;
  overflow-x: hidden;
  background: var(--background-for-content);
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERY_TABLET} {
    padding: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3% 0 3%;

  ${MEDIA_QUERY_TABLET} {
    padding: 0.5rem 3% 0 5.5rem;
  }

  ${MEDIA_QUERY_PHONE} {
    padding: 0.75rem 3% 0 5.5rem;
  }
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

  ${MEDIA_QUERY_TABLET} {
    width: 100%;
    font-size: 3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${MEDIA_QUERY_PHONE} {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h4)`
  color: var(--text-color);
  font-size: 1.25rem;
  margin: 1rem 0.5rem 1rem;
  letter-spacing: 0.1rem;
  transform-origin: left;
  will-change: transfom, opacity;
  min-width: fit-content;
`;

const Content = styled(motion.div)`
  width: 100%;
  max-width: 100%;
  flex: 1;
  overflow-y: auto;
  transform-origin: top;
  will-change: transform, opacity;
  padding: 0 3%;

  ${MEDIA_QUERY_TABLET} {
    overflow-y: initial;
  }
`;

interface PageLayoutProps {
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
  const { t } = useTranslation();
  const animationsEnabled = useAnimationsEnabled();
  const containerElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerElement.current?.scrollTo(0, 0);
  }, [pathname, query]);

  return (
    <Container ref={containerElement} id="app-container">
      <AnimatePresence>
        <TitleContainer>
          <Title
            data-testid="page-title"
            key="title"
            $isAestheticTitle={isAestheticTitle}
            initial={animationsEnabled ? { opacity: 0, scaleX: 0 } : {}}
            animate={animationsEnabled ? { opacity: 1, scaleX: 1 } : {}}
            exit={animationsEnabled ? { opacity: 0, scaleX: 0 } : {}}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {title}
          </Title>

          {subtitle && (
            <Subtitle
              data-testid="page-subtitle"
              key="subtitle"
              initial={animationsEnabled ? { opacity: 0, scaleX: 0 } : {}}
              animate={animationsEnabled ? { opacity: 1, scaleX: 1 } : {}}
              exit={animationsEnabled ? { opacity: 0, scaleX: 0 } : {}}
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
          <Content key="content-loading" data-testid="page-content">
            <Loader />
          </Content>
        )}

        {!isLoading && hasError && (
          <Content key="content-error" data-testid="page-content">
            <ErrorMessage
              title={t("common:errors.500.title")}
              message={t("common:errors.500.description")}
            />
          </Content>
        )}

        {!isLoading && !hasError && (
          <Content
            id="page-content"
            data-testid="page-content"
            key="content-loaded"
            initial={animationsEnabled ? { opacity: 0, translateY: 25 } : {}}
            animate={animationsEnabled ? { opacity: 1, translateY: 0 } : {}}
            exit={animationsEnabled ? { opacity: 0, translateY: -25 } : {}}
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
