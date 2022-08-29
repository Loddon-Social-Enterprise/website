import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import { getGenericPage, getWhatWeDoPage } from 'src/api/queries';
import { PartnerDetail } from 'src/components/PartnerDetail';
import styles from 'src/styles/pages/page.module.scss';
import { IPageFields } from 'src/types/contentful';

interface Props {
  content: IPageFields;
}

function renderOptions(links: any): Options {
  const entryMap = new Map();
  for (const entry of links.entries.block) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const entry = entryMap.get(node.data.target.sys.id);

        if (entry.__typename === 'PartnerList') return <PartnerDetail partner={entry} />;

        return <div>{`${node.nodeType} ${node.data.target.sys.id}`}</div>;
      }
    }
  };
}

const WhatWeDo: NextPage<Props> = ({ content: { pageTitle, body } }) => {
  return (
    <>
      <NextSeo title={pageTitle} />

      <section className={styles.page}>
        {body && documentToReactComponents(body.json, renderOptions(body.links) || {})}
      </section>
    </>
  );
};

export async function getStaticProps() {
  const content = await getWhatWeDoPage();

  return {
    props: { content }
  };
}

export default WhatWeDo;
