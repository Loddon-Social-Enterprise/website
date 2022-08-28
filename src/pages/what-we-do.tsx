import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { getWhatWeDoPage } from 'src/api/queries';
import { IWhatWeDoPageFields } from 'src/types/contentful';
import styles from 'src/styles/pages/index.module.scss';

interface Props {
  content: IWhatWeDoPageFields;
}

const WhatWeDo: NextPage<Props> = ({ content: { pageTitle, mainContentBody } }) => {
  return (
    <div>
      <Head>
        <title>{pageTitle} | Loddon Social Enterprise</title>
      </Head>

      <div className={styles.homepageLayout}>
        <section className={styles.mainBody}>
          {mainContentBody && documentToReactComponents(mainContentBody.json)}
        </section>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const content = await getWhatWeDoPage();

  return {
    props: { content }
  };
}

export default WhatWeDo;
