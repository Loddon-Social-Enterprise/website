import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { getContactPage } from 'src/api/queries';
import { AddressMarker, Map } from 'src/components/Map';
import styles from 'src/styles/pages/contact-us.module.scss';
import { IContactPageFields } from 'src/types/contentful';

interface Props {
  content: IContactPageFields;
}

const ContactUs: NextPage<Props> = ({ content: { pageTitle, contactBody, mapAddress, mapSettings } }) => {
  const latLng = {
    lat: mapSettings?.lat && parseFloat(mapSettings?.lat),
    lng: mapSettings?.lng && parseFloat(mapSettings?.lng)
  };

  return (
    <>
      <NextSeo title={pageTitle} />

      <div className={styles.contactUs}>
        <section>{contactBody && documentToReactComponents(contactBody.json)}</section>
        <div className={styles.mapContainer}>
          <Map className={styles.map} latLng={latLng} zoom={mapSettings?.zoom}>
            <AddressMarker position={latLng}>{mapAddress && documentToReactComponents(mapAddress.json)}</AddressMarker>
          </Map>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const content = await getContactPage();

  return {
    props: { content }
  };
}

export default ContactUs;
