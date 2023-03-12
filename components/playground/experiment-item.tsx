import { motion } from "framer-motion";
import styled from "styled-components";

import { ExperimentData } from "@/types/experiments";

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

interface ExperimentItemProps {
  experiment: ExperimentData;
  onClick: () => void;
}

export function ExperimentItem({ experiment, onClick }: ExperimentItemProps) {
  return (
    <Item
      bg={experiment.img}
      transition={{ duration: 0.5 }}
      layout="position"
      layoutId={experiment.title}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <Label>{experiment.title}</Label>
    </Item>
  );
}
