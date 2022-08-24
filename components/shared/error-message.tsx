import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.div`
  padding-bottom: 10rem;
`;

const Text = styled.p`
  font-size: 2rem;
  color: var(--error-color);
`;

export function ErrorMessage() {
  return (
    <Container>
      <TextContainer>
        <Text>There was an issue loading the page.</Text>
        <Text>Please try again later.</Text>
      </TextContainer>
    </Container>
  );
}
