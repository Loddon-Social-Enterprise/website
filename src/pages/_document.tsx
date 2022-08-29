import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta
            name="description"
            content="Loddon Social Enterprise is a registered UK charity which seeks to provide a safe and fun workshop environment for adults with learning disabilities."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
