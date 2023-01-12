import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { PageLayout } from "@/layouts/page";

const Content = styled.div`
  padding-top: 0;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1.5rem 0 0.5rem 0;
  color: var(--alt-text-color);

  &:first-child {
    margin-top: 0;
  }
`;

const SectionContent = styled.p`
  color: var(--text-color);
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

const ContactLinks = styled.ul`
  li {
    margin: 0.5rem 0;
  }

  a {
    color: var(--clickable-link-color);
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SelfieContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Selfie = styled(Image)`
  border-radius: 20px;
`;

export async function getStaticProps({ locale }: { locale: string }) {
  if (!locale) return { props: {} };

  const props = await serverSideTranslations(locale, [
    "common",
    "settings",
    "about",
  ]);

  return { props };
}

const About: NextPage = () => {
  const { t } = useTranslation("about");

  return (
    <PageLayout title={t("title")}>
      <Head>
        <title>{t("page.title")}</title>
        <meta name="description" content={t("page.description") ?? ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <SectionTitle>{t("me.title")}</SectionTitle>
        <SectionContent>{t("me.content")}</SectionContent>

        <SelfieContainer>
          <Selfie
            src="/images/avatar_2.jpg"
            width="200"
            height="250"
            objectFit="cover"
            objectPosition="top"
          />
          <Selfie
            src="/images/avatar_1.jpg"
            width="200"
            height="250"
            objectFit="cover"
            objectPosition="top"
          />
        </SelfieContainer>

        <SectionTitle>{t("hobbies.title")}</SectionTitle>
        <SectionContent>{t("hobbies.content")}</SectionContent>

        <SectionTitle>{t("work-experience.title")}</SectionTitle>
        <SectionContent>{t("work-experience.content-1")}</SectionContent>
        <SectionContent>{t("work-experience.content-2")}</SectionContent>

        <SectionTitle>{t("main-stack.title")}</SectionTitle>
        <SectionContent>{t("main-stack.content")}</SectionContent>

        <SectionTitle>{t("contact.title")}</SectionTitle>
        <SectionContent>{t("contact.content")}</SectionContent>
        <ContactLinks>
          <li>
            <a href="mailto:contact@yayu.dev" target="_blank" rel="noreferrer">
              {t("contact.links.email")}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yayudev"
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.links.github")}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yayudev/"
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.links.linkedin")}
            </a>
          </li>
          <li>
            <a
              href="ttps://twitter.com/datyayu"
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.links.twitter")}
            </a>
          </li>
        </ContactLinks>
      </Content>
    </PageLayout>
  );
};

export default About;
