import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { PageLayout } from "../layouts/page";

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

const About: NextPage = () => {
  return (
    <PageLayout title="About me">
      <Head>
        <title>yayu.dev | About</title>
        <meta name="description" content="About me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <SectionTitle>Me</SectionTitle>
        <SectionContent>
          Hi! I'm Arturo Coronel (you can call me Yayu). I'm 27, live in Mexico
          but I spend a LOT of time in Japan so there always a 50/50 chance
          you'll find me there. I ❤ web development and I love helping and
          teaching others about it.
        </SectionContent>

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

        <SectionTitle>Hobbies</SectionTitle>
        <SectionContent>
          Besides webdev, my hobbies are philosophy (currently studying a
          degree!), walking in nature, promoting mental health awareness,
          watching and attending idol lives events at Japan and watching anime.
        </SectionContent>

        <SectionTitle>Work Experience</SectionTitle>
        <SectionContent>
          I working as a fullstack developer for 10 years, focusing mainly on
          the front-end. I've been in both small and big teams as a lead and
          individual contributor. Worked on different sectors such as consumer
          applications, B2B data analysis applications, healtcare, government
          and scientific/genomic research applications.
        </SectionContent>

        <SectionContent>
          Personally I care a lot about topics such as accessibility, frontend
          performance, developer experience (tooling, flows, etc), testing and
          automating stuff (CI/CD); and I'm always trying to promote those ideas
          in the teams I've worked with.
        </SectionContent>

        <SectionTitle>Current main stack</SectionTitle>
        <SectionContent>
          React, Next, Jest, Cypress, Nest, postgres, netlify, AWS
        </SectionContent>

        <SectionTitle>Contact</SectionTitle>
        <SectionContent>
          Want to know more about me or contract my services? Do you have any
          idea or suggestion to improve this site? Want to talk about web
          development, philosophy or idols? Contact me!
        </SectionContent>
        <ContactLinks>
          <li>
            <a href="mailto:contact@yayu.dev" target="_blank" rel="noreferrer">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yayudev"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yayudev/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="ttps://twitter.com/datyayu"
              target="_blank"
              rel="noreferrer"
            >
              Twitter (hobbies only!)
            </a>
          </li>
        </ContactLinks>
      </Content>
    </PageLayout>
  );
};

export default About;
