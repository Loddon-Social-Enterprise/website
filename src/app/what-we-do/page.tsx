import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { getGenericPage } from 'src/api/queries';
import styles from 'src/styles/pages/page.module.scss';

const slug = 'what-we-do';

function renderOptions(): Options {
  return {
    renderNode: {
      [INLINES.HYPERLINK]: ({ data }, children) => {
        const content = children as Array<ReactNode>; // Type for hyperlinks in Options is incorrect, so we need to cast this
        return <>{content.length > 0 && <Link href={data.uri}>{content[0]}</Link>}</>;
      }
    }
  };
}

export async function generateMetadata() {
  const { pageTitle } = await getGenericPage(slug);

  return { title: pageTitle };
}

export default async function Page() {
  const { body } = await getGenericPage(slug);

  return (
    <section className={styles.page}>{body && documentToReactComponents(body.json, renderOptions() || {})}</section>
  );
}
