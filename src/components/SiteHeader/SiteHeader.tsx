import { NavBar } from 'src/components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logos/logo-white-yellow.svg';
import smiles from 'public/images/smiles-group.svg';
import styles from './SiteHeader.module.scss';

const SiteHeader = () => (
  <header className={styles.header}>
    <div className={styles.smiles} aria-hidden="true">
      <Image src={smiles} alt="Collection of smiley face emojis" />
    </div>
    <div className={styles.logoWrapper}>
      <Link href="/">
        <Image src={logo} title="Loddon Social Enterprise" alt="Loddon Social Enterprise logo" />
      </Link>
    </div>
    <NavBar />
  </header>
);

export { SiteHeader };
