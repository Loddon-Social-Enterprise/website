import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { getGenericPage } from 'src/api/queries';
import styles from 'src/styles/pages/page.module.scss';
import { IPageFields } from 'src/types/contentful';

interface Props {
  content: IPageFields;
}

function renderOptions(): Options {
  return {
    renderNode: {
      [INLINES.HYPERLINK]: ({ data }, children) => {
        const content = children as Array<ReactNode>; // Type for hyperlinks in Options is incorrect, so we need to cast this
        return (
          <>
            {content.length > 0 && (
              <Link href={data.uri}>
                {content[0]}
              </Link>
            )}
          </>
        );
      }
    }
  };
}

const WhatWeDo: NextPage<Props> = ({ content: { pageTitle, body } }) => {
  return (
    <>
      <NextSeo title={pageTitle} />

      <section className={styles.page}>{body && documentToReactComponents(body.json, renderOptions() || {})}</section>
    </>
  );
};

export async function getStaticProps() {
  const content = await getGenericPage('what-we-do');

  return {
    props: { content }
  };
}

export default WhatWeDo;
