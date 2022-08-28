import { icon, LatLngLiteral } from 'leaflet';
import React, { useEffect, useRef } from 'react';
import { MapContainer, Marker, MarkerProps, Popup, TileLayer } from 'react-leaflet';
import markerIcon from 'public/images/map-pointer.svg';
import styles from './Map.module.scss';

interface Props {
  latLng?: LatLngLiteral;
  zoom?: number;
  className?: string;
}

const LocationMarker = (props: MarkerProps) => {
  const markerRef = useRef(null);
  
  useEffect(() => {
    try {
      // @ts-ignore
      if (markerRef.current !== null && !markerRef.current.isPopupOpen()) {
        // @ts-ignore
        markerRef.current.openPopup();
      }
    } catch (error) {}
  },[])
  return <Marker ref={markerRef} {...props} />
}

const Map = ({
  latLng = {
    lat: 51.249903623792335, lng: -1.1001466693117041
  },
  zoom = 14,
  className
}: Props) => {

  var marker = icon({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon.src,
    iconSize: [36, 66],
    iconAnchor: [18, 66],
    popupAnchor: [0, -66]
  });

  const mapCenter = {
    lat: latLng.lat + 0.005,
    lng: latLng.lng
  }

  return (
    <MapContainer className={className} center={mapCenter} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker icon={marker} position={latLng}>
        <Popup>
          <address>
            <b>Loddon Social Enterprise</b><br />
            Units D9/10 Brunswick Place<br />
            Cranbourne Lane<br />
            Basingstoke<br />
            Hampshire<br />
            RG21 3NN
          </address>
        </Popup>
      </LocationMarker>
    </MapContainer>
  )
};

export { Map };
export default Map;