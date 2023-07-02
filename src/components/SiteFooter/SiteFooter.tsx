import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import hccLogo from 'public/images/hcc-logo-on-blue.svg';
import { getSiteFooter } from 'src/api/queries';
import styles from './SiteFooter.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const SiteFooter = async () => {
  const { registrations, contacts } = await getSiteFooter();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerSection}>
          <small className={styles.copy}>&copy; {new Date().getFullYear()} Loddon Social Enterprise</small>
          <div className={styles.regNumbers}>{registrations && documentToReactComponents(registrations.json)}</div>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
        <section className={styles.footerSection}>
          <h2>Contact Us</h2>
          <div className={styles.contactDetails}>{contacts && documentToReactComponents(contacts.json)}</div>
        </section>
        <div className={classnames([styles.footerSection, styles.hccLogo])}>
          <h2>Supported by</h2>
          <Image src={hccLogo} alt="Hampshire County Council logo" title="Hampshire County Council" width={120} />
        </div>
      </div>
    </footer>
  );
};

export { SiteFooter };
