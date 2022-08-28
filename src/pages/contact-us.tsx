import type { NextPage } from 'next';
import Head from 'next/head';
import { Map } from 'src/components/Map';
import styles from 'src/styles/pages/contact-us.module.scss';

const ContactUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Loddon Social Enterprise</title>
      </Head>
      <div className={styles.contactUs}>
        <div className={styles.mapContainer}>
          <Map className={styles.map} />
        </div>
        <section>
          <h1>Contact Us</h1>
          <h2>Phone</h2>
          <p>
            <a href="tel:+4401256352058">01256 352058</a>
          </p>
          <h2>Email</h2>
          <p>
            <a href="mailto:cathy@loddonctl.co.uk">cathy@loddonctl.co.uk</a>
          </p>
          <h2>Opening Hours</h2>
          <p>
            We are open 51 weeks of the year (excluding Bank Holidays)<br />
            Monday to Thursday: 09:00 to 15:00<br />
            Fridays: Closed
          </p>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
