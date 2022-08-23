import styled from "styled-components";
import { createPortal } from "react-dom";
import { ExperimentData } from "../../mocks/experiments";
import { AnimatePresence, motion } from "framer-motion";

const FrameContainer = styled(motion.div)`
  position: absolute;
  padding: 10vh 10vw;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  cursor: pointer;
`;

const Frame = styled(motion.iframe)`
  border: 1px solid var(--background-alt);
  width: 80vw;
  height: 80vh;
  background: white;
`;

const Details = styled(motion.div)`
  position: absolute;
  bottom: 10vh;
  right: 10vw;
  background: var(--alt-text-color);
  opacity: 0.75;
  min-width: 20rem;
  max-width: 40vw;
  padding: 0.25rem 1rem;
`;

const Title = styled.h2`
  color: var(--link-color);
  margin: 0.5rem 0;
`;

const ViewLink = styled.a`
  display: block;
  color: var(--link-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

interface PlaygroundFrameProps {
  experiment?: ExperimentData;
  onClose: () => void;
}

export function PlaygroundFrame({ experiment, onClose }: PlaygroundFrameProps) {
  if (typeof window !== "object") return null;

  return createPortal(
    <AnimatePresence>
      {experiment && (
        <FrameContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={onClose}
        >
          <Frame
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={experiment.url}
            onClick={(e) => e.stopPropagation()}
          />

          <Details
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Title>{experiment.title}</Title>
            <ViewLink target="_blank" href={experiment.url}>
              {experiment.url}
            </ViewLink>
          </Details>
        </FrameContainer>
      )}
    </AnimatePresence>,
    document.body
  );
}
