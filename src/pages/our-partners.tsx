import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import { getGenericPage } from 'src/api/queries';
import { IPageFields } from 'src/types/contentful';
import styles from 'src/styles/pages/page.module.scss';

interface Props {
  content: IPageFields;
}

const OurPartners: NextPage<Props> = ({ content: { pageTitle, body } }) => {
  return (
    <>
      <NextSeo title={pageTitle} />

      <section className={styles.page}>{body && documentToReactComponents(body.json)}</section>
    </>
  );
};

export async function getStaticProps() {
  const content = await getGenericPage('our-partners');

  return {
    props: { content }
  };
}

export default OurPartners;