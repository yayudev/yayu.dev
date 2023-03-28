import styled from "styled-components";

import { MEDIA_QUERY_TABLET } from "@/constants/media-queries";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--error-color);
`;

const TextContainer = styled.div`
  ${MEDIA_QUERY_TABLET} {
    padding-bottom: 10rem;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  color: var(--error-color);
`;

export interface ErrorMessageProps {
  title: string;
  message: string;
}

export function ErrorMessage({ title, message }: ErrorMessageProps) {
  return (
    <Container data-testid="error-message">
      <TextContainer>
        <h2 data-testid="error-message__title">{title}</h2>
        <Text key={message} data-testid="error-message__text">
          {message}
        </Text>
      </TextContainer>
    </Container>
  );
}
