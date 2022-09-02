import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: start;
  display: grid;
  place-items: center;
  padding-bottom: 5rem;
`;

const loadingDotsAnimation = keyframes`
  0%   { content: "";    }
  25%  { content: ".";   }
  50%  { content: "..";  }
  75%  { content: "...";  }
  100% { content: ""; }
`;

const Text = styled.h3`
  color: var(--text-color);
  font-size: 2rem;
  font-weight: bold;
  padding: 0;
  margin: 0.5rem 0 1rem 0;
  letter-spacing: 0.5rem;
  &:after {
    content: "";
    animation: ${loadingDotsAnimation} 2000ms infinite;
  }
`;

export function Loader() {
  return (
    <Container>
      <Text>Loading</Text>
    </Container>
  );
}
