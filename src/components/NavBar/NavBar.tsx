import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import useReducedMotion from 'src/hooks/useReducedMotion';
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
  const hasRequestedReducedMotion = useReducedMotion();

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  const closeMenuAndScroll = useCallback(() => {
    !hasRequestedReducedMotion && scrollToTop();
    setIsResponsiveMenuExpanded(false);
  }, []);

  const toggleMenu = useCallback(() => {
    !hasRequestedReducedMotion && scrollToTop();
    setIsResponsiveMenuExpanded((state: boolean) => !state);
  }, []);

  return (
    <nav role="navigation" className={styles.navBar}>
      <ul className={classnames([styles.inner, isResponsiveMenuExpanded && styles.isExpanded])}>
        {Object.entries(links).map(([title, href]) => (
          <li className={classnames([styles.navItem, pathname.endsWith(href) && styles.currentNavItem])} key={href}>
            {pathname.endsWith(href) ? (
              <span onClick={closeMenuAndScroll}>{title}</span>
            ) : (
              <Link href={href} passHref>
                <a onClick={closeMenuAndScroll}>{title}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <button className={styles.button} aria-expanded={isResponsiveMenuExpanded} onClick={toggleMenu}>
        {isResponsiveMenuExpanded ? 'Close Menu' : 'Show Menu'}
      </button>
    </nav>
  );
};

export { NavBar };
