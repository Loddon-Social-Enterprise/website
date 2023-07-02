import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getContactPage } from 'src/api/queries';
import { AddressMarker, Map } from 'src/components/Map';
import styles from 'src/styles/pages/contact-us.module.scss';

export async function generateMetadata() {
  const { pageTitle } = await getContactPage();

  return { title: pageTitle };
}

export default async function Page() {
  const { contactBody, mapAddress, mapSettings } = await getContactPage();

  const latLng = {
    lat: mapSettings?.lat && parseFloat(mapSettings?.lat),
    lng: mapSettings?.lng && parseFloat(mapSettings?.lng)
  };

  return (
    <div className={styles.contactUs}>
      <section>{contactBody && documentToReactComponents(contactBody.json)}</section>
      <div className={styles.mapContainer}>
        <Map className={styles.map} latLng={latLng} zoom={mapSettings?.zoom}>
          <AddressMarker position={latLng}>{mapAddress && documentToReactComponents(mapAddress.json)}</AddressMarker>
        </Map>
      </div>
    </div>
  );
}
