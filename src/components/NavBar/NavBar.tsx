import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import styles from './NavBar.module.scss';

const links = {
  Home: '/',
  'What We Do': '/what-we-do',
  'Service Users': '/our-service-users',
  Partners: '/our-partners',
  Team: '/our-team',
  'Contact Us': '/contact-us'
};

const NavBar = () => {
  const { pathname } = useRouter();
  const [isResponsiveMenuExpanded, setIsResponsiveMenuExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    window.scrollTo(0, 0);
    setIsResponsiveMenuExpanded((state: boolean) => !state);
  }, []);

  return (
    <nav role="navigation" className={styles.navBar}>
      <ul className={classnames([styles.inner, isResponsiveMenuExpanded && styles.isExpanded])}>
        {Object.entries(links).map(([title, href]) => (
          <li className={classnames([styles.navItem, pathname.endsWith(href) && styles.currentNavItem])} key={href}>
            <Link href={href} passHref>
              <a onClick={() => setIsResponsiveMenuExpanded(false)}>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <button className={styles.button} aria-expanded={isResponsiveMenuExpanded} onClick={toggleExpanded}>
        {isResponsiveMenuExpanded ? 'Close Menu' : 'Show Menu'}
      </button>
    </nav>
  );
};

export { NavBar };
