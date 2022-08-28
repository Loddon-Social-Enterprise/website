import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { getGenericPage } from 'src/api/queries';
import { IPageFields } from 'src/types/contentful';
import styles from 'src/styles/pages/page.module.scss'

interface Props {
  content: IPageFields;
}

const PrivacyPolicy: NextPage<Props> = ({ content: { pageTitle, body } }) => {
  return (
    <>
      <Head>
        <title>{`${pageTitle} | Loddon Social Enterprise`}</title>
      </Head>

      <section className={styles.privacyPolicy}>
        {body && documentToReactComponents(body.json)}
      </section>
    </>
  );
};

export async function getStaticProps() {
  const content = await getGenericPage('privacy-policy');

  return {
    props: { content }
  };
}

export default PrivacyPolicy;
