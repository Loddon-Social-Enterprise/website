import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Page Not Found | Loddon Social Enterprise'
};

export default async function Page() {
  return (
    <section>
      <h1>Error: Page Not Found</h1>
      <p>
        Sorry, the page you were looking for does not appear to exist. The link you followed may be wrong, or the page
        may have been removed
      </p>
      <p>
        You may want to <Link href="/">go back to our homepage</Link> to continue browsing our site.
      </p>
    </section>
  );
}
