import { SiteHeader } from 'src/components/SiteHeader';
import { ReactChild } from 'react';
import styles from './Layout.module.scss';
import { SiteFooter } from '../SiteFooter';

const Layout = ({ children }: { children: ReactChild }) => (
  <div className={styles.layoutWrapper}>
    <SiteHeader />
    <main className={styles.main}>{children}</main>
    <SiteFooter />
  </div>
);

export { Layout };
