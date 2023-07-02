import { Metadata } from 'next';
import Script from 'next/script';
import { PropsWithChildren } from 'react';
import { Layout as SiteLayout } from 'src/components/Layout';
import '../styles/globals.scss';

const accentColor = '#067bc2';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en-GB">
      <head />
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
      <Script
        id="counter-analytics"
        src="https://cdn.counter.dev/script.js"
        strategy="afterInteractive"
        data-id="2a772c3b-150f-4721-9a77-8a8cb09fdeba"
        data-utcoffset="0"
      />
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | Loddon Social Enterprise',
    default: 'Loddon Social Enterprise' // a default is required when creating a template
  },
  applicationName: 'Loddon Social Enterprise',
  description:
    'Loddon Social Enterprise is a registered UK charity which seeks to provide a safe and fun workshop environment for adults with learning disabilities.',
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  manifest: '/site.webmanifest',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      sizes: 'any'
    },
    {
      rel: 'icon',
      url: '/favicon.svg',
      type: 'image/svg+xml'
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      sizes: '180x180'
    }
  ],
  appleWebApp: {
    capable: true,
    title: 'Loddon Social Enterprise',
    statusBarStyle: 'black-translucent'
  },
  other: {
    'msapplication-TileColor': accentColor
  }
};
