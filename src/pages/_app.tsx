import { Layout } from 'src/components/Layout';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import React, { useEffect } from 'react';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    console.log(`/**\n * Contribute and fork on Github \n * https://github.com/loddon-social-enterprise/website\n */`);
  }, []);

  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Loddon Social Enterprise"
        defaultTitle="Loddon Social Enterprise"
        description="Loddon Social Enterprise is a registered UK charity which seeks to provide a safe and fun workshop environment for adults with learning disabilities."
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
            sizes: 'any'
          },
          {
            rel: 'icon',
            href: '/favicon.svg',
            type: 'image/svg+xml'
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180'
          },
          {
            rel: 'mask-icon',
            href: '/safari-pinned-tab.svg',
            color: '#067bc2'
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest'
          }
        ]}
        additionalMetaTags={[
          {
            name: 'apple-mobile-web-app-title',
            content: 'Loddon Social Enterprise'
          },
          {
            name: 'application-name',
            content: 'Loddon Social Enterprise'
          },
          {
            name: 'msapplication-TileColor',
            content: '#067bc2'
          }
        ]}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js" />
      <Script
        id="google-webfonts"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `WebFont.load({google:{families:["Montserrat:regular,italic,bold,bolditalic&display=swap"]}})`
        }}
      />
    </>
  );
};

export default App;
