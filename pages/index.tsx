import { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  if (!locale) return { props: {} };

  const props = await serverSideTranslations(locale, ["common", "settings"]);

  return { props };
}

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("page-name")}</title>
        <meta name="description" content={t("page-description") ?? ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
