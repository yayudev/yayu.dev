import styled from "styled-components";
import { motion } from "framer-motion";
import { MEDIA_QUERY_TABLET } from "@/config/media-queries";

export const SettingsTitle = styled(motion.h1)`
  color: var(--text-color);
  font-size: 3.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
  letter-spacing: 0.75rem;
  text-shadow: 7px 9px 4px rgb(0, 0, 0, 0.25);
  transform-origin: left;
  will-change: transfom, opacity;

  ${MEDIA_QUERY_TABLET} {
    padding-left: 4.4rem;
    font-size: 3rem;
  }
`;
