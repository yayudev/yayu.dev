import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import styled from "styled-components";

import { ExperimentData } from "@/types/experiments";

import { PlaygroundFrame } from "@/components/playground/playground-frame";
import { ExperimentItem } from "@/components/playground/experiment-item";

const Container = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, 320px);
  grid-auto-rows: minmax(120px, 1fr);
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
          <ExperimentItem
            key={experiment.title}
            experiment={experiment}
            onClick={() => setActiveExperiment(experiment)}
          />
        ))}
      </LayoutGroup>
    </Container>
  );
}
