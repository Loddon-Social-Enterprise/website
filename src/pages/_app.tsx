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
            name: 'viewport',
            content: 'width=device-width,initial-scale=1'
          },
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
      <Script
        id="counter-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,id:"2a772c3b-150f-4721-9a77-8a8cb09fdeba",utcoffset:"1"}))};sessionStorage.setItem("_swa","1");`
        }}
      />
    </>
  );
};

export default App;
