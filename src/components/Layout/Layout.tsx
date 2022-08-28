import Image from 'next/image';
import { ReactChild } from 'react';
import { SiteFooter } from 'src/components/SiteFooter';
import { SiteHeader } from 'src/components/SiteHeader';
import smiles from 'public/images/smiles-group.svg';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: ReactChild }) => (
  <div className={styles.layoutWrapper}>
    <div className={styles.smiles}>
      <Image src={smiles} alt="Collection of smiley face emojis" />
    </div>
    <SiteHeader />
    <main className={styles.main}>{children}</main>
    <SiteFooter />
  </div>
);

export { Layout };
