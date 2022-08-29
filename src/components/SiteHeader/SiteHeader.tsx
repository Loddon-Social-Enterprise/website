import { NavBar } from 'src/components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logos/logo-white-yellow.svg';
import styles from './SiteHeader.module.scss';

const SiteHeader = () => (
  <header className={styles.header}>
    <div className={styles.logoWrapper}>
      <Link href="/" passHref>
        <a>
          <Image src={logo} alt="Loddon Social Enterprise" />
        </a>
      </Link>
    </div>
    <NavBar />
  </header>
);

export { SiteHeader };
