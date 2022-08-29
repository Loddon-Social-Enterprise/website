import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { NextPage } from 'next';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import React from 'react';
import { getHomepage } from 'src/api/queries';
import { IHomepageFields } from 'src/types/contentful';
import { CalloutQuote } from 'src/components/CalloutQuote';
import ellipseServiceHighlight from 'public/images/ellipse-service-highlight.svg';
import styles from 'src/styles/pages/index.module.scss';

interface Props {
  content: IHomepageFields;
}

const Home: NextPage<Props> = ({ content: { pageTitle, mainContentBody, calloutQuote, alertMessage } }) => {
  return (
    <div>
      <NextSeo title={pageTitle} />

      {alertMessage && alertMessage.json && (
        <div className={styles.alert}>{mainContentBody && documentToReactComponents(alertMessage.json)}</div>
      )}

      <div className={styles.homepageLayout}>
        <section className={styles.mainBody}>
          {mainContentBody && documentToReactComponents(mainContentBody.json)}
        </section>
        <aside className={styles.asideColumn}>
          <div>
            <Image src={ellipseServiceHighlight} alt="A smiling Loddon service user working on a project" />
          </div>
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
