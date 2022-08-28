import Link from 'next/link';
import styles from './NavBar.module.scss';

const links = {
  Home: '/',
  'What We Do': '/what-we-do',
  'Our Partners': 'our-partners',
  'Our Team': '/our-team',
  'Contact Us': '/contact-us'
};

const NavBar = () => (
  <nav className={styles.navBar}>
    <ul className={styles.inner}>
      {Object.entries(links).map(([title, href]) => (
        <li className={styles.navItem} key={href}>
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export { NavBar };
