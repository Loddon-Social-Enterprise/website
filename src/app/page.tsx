import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { getHomepage } from 'src/api/queries';
import { Alert } from 'src/components/Alert';
import { CalloutQuote } from 'src/components/CalloutQuote';
import ellipseServiceHighlight from 'public/images/ellipse-service-highlight.svg';
import styles from 'src/styles/pages/index.module.scss';

export const metadata: Metadata = {
  title: 'Welcome | Loddon Social Enterprise'
};

export default async function Page() {
  const content = await getHomepage();

  const { mainContentBody, calloutQuote, alertMessage } = content;

  return (
    <div>
      {alertMessage && alertMessage.json && (
        <Alert>{mainContentBody && documentToReactComponents(alertMessage.json)}</Alert>
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
}
