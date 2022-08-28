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

const WhatWeDo: NextPage<Props> = ({ content: { pageTitle, body } }) => {
  return (
    <div>
      <Head>
        <title>{`${pageTitle} | Loddon Social Enterprise`}</title>
      </Head>

      <section className={styles.page}>
        {body && documentToReactComponents(body.json)}
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const content = await getGenericPage('what-we-do');

  return {
    props: { content }
  };
}

export default WhatWeDo;
