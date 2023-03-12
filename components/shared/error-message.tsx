import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation();

  return (
    <Container>
      <TextContainer>
        <Text>{t("common:errors.error-loading-page")}</Text>
        <Text>{t("common:errors.error-try-again")}</Text>
      </TextContainer>
    </Container>
  );
}
