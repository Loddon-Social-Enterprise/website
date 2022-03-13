import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { getHomepage } from 'api/queries';
import { IHomepageFields } from 'types/contentful';

interface Props {
  content: IHomepageFields;
}

const Home: NextPage<Props> = ({ content: { pageTitle, dummyContent} }) => {
  return (
    <div>
      <Head>
        <title>Loddon Social Enterprise</title>
      </Head>

      <main className="flex justify-center h-screen p-10">
        <section className="prose lg:prose-l">
          <h1 className="mb-5">{pageTitle}</h1>
          {dummyContent && documentToReactComponents(dummyContent.json)}
        </section>
      </main>
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
