import dynamic from 'next/dynamic';

const importMapValues = (module: string) =>
  dynamic(() => import('./Map').then((mod: any) => mod[module]) as Promise<React.FC<any>>, { ssr: false });

const Map = importMapValues('Map');
const AddressMarker = importMapValues('AddressMarker');

export { Map, AddressMarker };
