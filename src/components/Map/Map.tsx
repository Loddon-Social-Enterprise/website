import classnames from 'classnames';
import { icon, LatLngLiteral, Marker as MarkerType } from 'leaflet';
import React, { FunctionComponent, useEffect, useRef } from 'react';
import { MapContainer, Marker, MarkerProps, Popup, TileLayer } from 'react-leaflet';
import markerIcon from 'public/images/map-pointer.svg';
import styles from './Map.module.scss';

interface Props {
  latLng?: LatLngLiteral;
  zoom?: number;
  className?: string;
}

const Map: FunctionComponent<Props> = ({
  latLng = {
    lat: 51.249903623792335,
    lng: -1.1001466693117041
  },
  zoom = 10,
  className,
  children
}) => {
  const mapCenter = {
    lat: latLng.lat + 0.00045 * zoom,
    lng: latLng.lng
  };

  return (
    <MapContainer className={classnames(styles.map, className)} center={mapCenter} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};

const AddressMarker: FunctionComponent<MarkerProps> = ({ children, ...props }) => {
  const markerRef = useRef<MarkerType>(null);

  var iconOpts = icon({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon.src,
    iconSize: [36, 66],
    iconAnchor: [18, 66],
    popupAnchor: [0, -66]
  });

  useEffect(() => {
    try {
      if (markerRef.current !== null && !markerRef.current.isPopupOpen()) {
        markerRef.current.openPopup();
      }
    } catch (error) {}
  }, []);

  return (
    <Marker ref={markerRef} icon={iconOpts} {...props}>
      <Popup>
        <address>{children}</address>
      </Popup>
    </Marker>
  );
};

export { Map, AddressMarker };
export default Map;
