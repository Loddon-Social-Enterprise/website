import Link from 'next/link';
import { ReactNode, Suspense } from 'react';
import { SiteFooter } from 'src/components/SiteFooter';
import { SiteHeader } from 'src/components/SiteHeader';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Link href="#main" className={styles.skipToContent}>
      Skip to content
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
