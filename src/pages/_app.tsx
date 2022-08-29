import { Layout } from 'src/components/Layout';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import React from 'react';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      titleTemplate="%s | Loddon Social Enterprise"
      defaultTitle="Loddon Social Enterprise"
      description="Loddon Social Enterprise is a registered UK charity which seeks to provide a safe and fun workshop environment for adults with learning disabilities."
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

export default App;
