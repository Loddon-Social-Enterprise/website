import { documentToReactComponents, Options, RenderNode } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { ReactNode } from 'react';
import { getGenericPage } from 'src/api/queries';
import styles from 'src/styles/pages/page.module.scss';

interface Context {
  params: {
    slug: string;
  };
}

function renderOptions(links: any): Options {
  const assetMap = new Map();
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  return {
    renderNode: {
      [INLINES.HYPERLINK]: ({ data }, children) => {
        const content = children as Array<ReactNode>; // Type for hyperlinks in Options is incorrect, so we need to cast this
        return <>{content.length > 0 && <Link href={data.uri}>{content[0]}</Link>}</>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        const asset = assetMap.get(node.data.target.sys.id);
        return <Image src={asset.url} alt={asset.description} width={asset.width} height={asset.height} />;
      }
    }
  };
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

  return (
    <section className={styles.page}>
      {body && documentToReactComponents(body.json, renderOptions(body.links) || {})}
    </section>
  );
}
