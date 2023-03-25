import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "styled-components";

import { ErrorMessage } from "@/components/shared/error-message";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--error-color);
`;

export async function getStaticProps({ locale }: { locale: string }) {
  if (!locale) return { props: {} };

  const props = await serverSideTranslations(locale, ["common"]);

  return { props };
}

export default function Custom404() {
  const { t } = useTranslation();

  return (
    <TextContainer>
      <ErrorMessage
        title={t("common:errors.404.title")}
        message={t("common:errors.404.description")}
      />
    </TextContainer>
  );
}
