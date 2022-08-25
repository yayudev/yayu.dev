import { ReactNode } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorMessage } from "@/components/shared/error-message";
import { Loader } from "@/components/shared/loader";

const Container = styled.div`
  width: 100%;
  padding: 5%;
  overflow-x: hidden;
  overflow-y: auto;
  background: var(--background-for-content);
  display: flex;
  flex-direction: column;
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

const Content = styled(motion.div)`
  width: 100%;
  flex: 1;
  transform-origin: top;
  will-change: transform, opacity;
`;

export interface PageLayoutProps {
  title: string;
  isLoading?: boolean;
  hasError?: boolean;
  children: ReactNode;
}

export function PageLayout({
  title,
  isLoading = false,
  hasError = false,
  children,
}: PageLayoutProps) {
  return (
    <Container>
      <AnimatePresence>
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

        {isLoading && <Loader />}

        {!isLoading && hasError && <ErrorMessage />}

        {!isLoading && (
          <Content
            key="content"
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
