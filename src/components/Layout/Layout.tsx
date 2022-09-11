import Link from 'next/link';
import { ReactChild } from 'react';
import { SiteFooter } from 'src/components/SiteFooter';
import { SiteHeader } from 'src/components/SiteHeader';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: ReactChild }) => (
  <>
    <Link href="#main" passHref>
      <a className={styles.skipToContent}>Skip to content</a>
    </Link>
    <div className={styles.layoutWrapper}>
      <SiteHeader />
      <main id="main" className={styles.main}>
        {children}
      </main>
      <SiteFooter />
    </div>
  </>
);

export { Layout };
