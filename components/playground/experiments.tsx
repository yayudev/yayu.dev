import styled from "styled-components";
import { ExperimentData } from "../../mocks/experiments";
import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { PlaygroundFrame } from "@/components/playground/playground-frame";

const Container = styled.div`
  display: grid;
  justify-content: center;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, 320px);
  grid-auto-rows: minmax(120px, 1fr);
`;

const Label = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  color: white;
  padding: 1rem;
  background: rgba(149, 91, 6, 0.5);
  transition: background 200ms ease-in-out;
`;

const Item = styled(motion.div)<{ bg: string }>`
  background-image: url("${(props) => props.bg}");
  background-position: center;
  background-size: cover;
  position: relative;
  will-change: transform;
  cursor: pointer;
  transition: box-shadow 200ms ease-in-out;
  box-sizing: border-box;
  height: 240px;
  border: 1px solid var(--background-alt);

  &:hover {
    z-index: 2;
    box-shadow: 1px 3px 4px 2px rgba(0, 0, 0, 0.25);
  }
`;

interface ExperimentsProps {
  experiments: ExperimentData[];
}

export function Experiments({ experiments }: ExperimentsProps) {
  const [activeExperiment, setActiveExperiment] = useState<
    ExperimentData | undefined
  >();

  function closeFrame() {
    setActiveExperiment(undefined);
  }

  return (
    <Container>
      <PlaygroundFrame experiment={activeExperiment} onClose={closeFrame} />

      <LayoutGroup>
        {experiments.map((experiment) => (
          //TODO: Refactor this into smaller components
          <Item
            key={experiment.title}
            // TODO: Move this url to data, instead of hard-coding it
            bg={`https://s3-us-west-1.amazonaws.com/datyayu-xyz/experiments/${experiment.img}.jpg`}
            transition={{ duration: 0.5 }}
            layout="position"
            layoutId={experiment.title}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            onClick={() => setActiveExperiment(experiment)}
          >
            <Label>{experiment.title}</Label>
          </Item>
        ))}
      </LayoutGroup>
    </Container>
  );
}
