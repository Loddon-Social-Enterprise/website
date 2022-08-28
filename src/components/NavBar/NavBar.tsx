import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.scss';

const links = {
  Home: '/',
  'What We Do': '/what-we-do',
  'Our Partners': 'our-partners',
  'Our Team': '/our-team',
  'Contact Us': '/contact-us'
};

const NavBar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.navBar}>
      <ul className={styles.inner}>
        {Object.entries(links).map(([title, href]) => (
          <li className={classnames([styles.navItem, pathname === href && styles.currentNavItem])} key={href}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export { NavBar };
