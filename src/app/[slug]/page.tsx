import { PageProps } from '.next/types/app/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { notFound } from 'next/navigation';
import React from 'react';
import { getGenericPage } from 'src/api/queries';
import styles from 'src/styles/pages/page.module.scss';

export async function generateMetadata({ params }: PageProps) {
  try {
    const { pageTitle } = await getGenericPage(params.slug);
    return { title: pageTitle };
  } catch (e) {
    notFound();
  }
}

export default async function Page({ params }: PageProps) {
  const { body } = await getGenericPage(params.slug);
  if (!body) return notFound();

  return <section className={styles.page}>{body && documentToReactComponents(body.json)}</section>;
}
