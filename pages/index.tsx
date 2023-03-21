import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export async function getStaticProps({ locale }: { locale: string }) {
  if (!locale) return { props: {} };

  const props = await serverSideTranslations(locale, ["common", "settings"]);

  return { props };
}

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Head>
      <title>{t("common:page-name")}</title>
      <meta name="description" content={t("common:page-description") ?? ""} />
      <meta property="og:title" content={t("common:page-name") ?? ""} />
      <meta
        property="og:description"
        content={t("common:page-description") ?? ""}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Home;
