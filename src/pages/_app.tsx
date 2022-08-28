import { Layout } from 'src/components/Layout';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
