import { ReactChild } from 'react';
import { SiteFooter } from 'src/components/SiteFooter';
import { SiteHeader } from 'src/components/SiteHeader';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: ReactChild }) => (
  <div className={styles.layoutWrapper}>
    <SiteHeader />
    <main className={styles.main}>{children}</main>
    <SiteFooter />
  </div>
);

export { Layout };
