import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { getHomepage } from 'src/api/queries';
import { IHomepageFields } from 'src/types/contentful';
import { CalloutQuote } from 'src/components/CalloutQuote';
import ellipseServiceHighlight from 'public/images/ellipse-service-highlight.png';
import styles from 'src/styles/pages/index.module.scss';

interface Props {
  content: IHomepageFields;
}

const Home: NextPage<Props> = ({ content: { pageTitle, mainContentBody, calloutQuote } }) => {
  return (
    <div>
      <Head>
        <title>{`${pageTitle} | Loddon Social Enterprise`}</title>
      </Head>

      <div className={styles.homepageLayout}>
        <section className={styles.mainBody}>
          {mainContentBody && documentToReactComponents(mainContentBody.json)}
        </section>
        <aside className={styles.asideColumn}>
          <Image src={ellipseServiceHighlight} alt="A smiling Loddon service user working on a project" />
          {calloutQuote && (
            <CalloutQuote>
              <>{documentToReactComponents(calloutQuote.json)}</>
            </CalloutQuote>
          )}
        </aside>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const content = await getHomepage();

  return {
    props: { content }
  };
}

export default Home;
