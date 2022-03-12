import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Loddon Social Enterprise</title>
      </Head>

      <main className="p-5">
        <h1 className="text-2xl text-center">Welcome to Loddon Social Enterprise</h1>
      </main>
    </div>
  );
};

export default Home;
