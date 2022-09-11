import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import hccLogo from 'public/images/hcc-logo-on-blue.svg';
import styles from './SiteFooter.module.scss';

const SiteFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <div className={styles.footerSection}>
        <small className={styles.copy}>&copy; {new Date().getFullYear()} Loddon Social Enterprise</small>
        <ul className={styles.regNumbers}>
          <li>Registered Charity No. 1011066</li>
          <li>Company No. 2701126</li>
          <li>
            <abbr title="Value Added Tax">VAT</abbr> No. 570177149
          </li>
        </ul>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
      <section className={styles.footerSection}>
        <h2>Contact Us</h2>
        <p>
          <span className={styles.contactDetails}>
            <a href="mailto:cathy@loddonse.co.uk">cathy@loddonse.co.uk</a>
            <br />
            <a href="tel:+441256352058">01256 352058</a>
          </span>
          <br />
          <br />
          <span>
            Monday - Thursday
            <br />
            9am - 3pm
          </span>
        </p>
      </section>
      <div className={classnames([styles.footerSection, styles.hccLogo])}>
        <h2>Supported by</h2>
        <Image src={hccLogo} alt="Hampshire County Council logo" title="Hampshire County Council" width={120} />
      </div>
    </div>
  </footer>
);

export { SiteFooter };
