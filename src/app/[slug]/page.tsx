import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { notFound } from 'next/navigation';
import React from 'react';
import { getGenericPage } from 'src/api/queries';
import styles from 'src/styles/pages/page.module.scss';

interface Context {
  params: {
    slug: string;
  }
}

export async function generateMetadata({ params }: Context) {
  try {
    const { pageTitle } = await getGenericPage(params.slug);
    return { title: pageTitle };
  } catch (e) {
    notFound();
  }
}

export default async function Page({ params }: Context) {
  const { body } = await getGenericPage(params.slug);
  if (!body) return notFound();

  return <section className={styles.page}>{body && documentToReactComponents(body.json)}</section>;
}
