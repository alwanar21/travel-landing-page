import { StaticImageData } from 'next/image';
import MirrorLake from '../../public/images/cards/Image.png';
import HotAirBalloon from '../../public/images/cards/Image-1.png';
import OeschinenLake from '../../public/images/cards/Image-2.png';
import RhineFalls from '../../public/images/cards/Image-3.png';
import SunterLake from '../../public/images/cards/Image-4.png';
import Negeri from '../../public/images/cards/Image-5.png';

type destinationType = {
  image: StaticImageData;
  name: string;
  location: string;
};
const destinations: destinationType[] = [
  {
    image: MirrorLake,
    name: 'Mirror Lake',
    location: 'Jawa Tengah, Indonesia',
  },
  {
    image: HotAirBalloon,
    name: 'Hot Air Balloon',
    location: 'Cappadocia. Turkey',
  },
  {
    image: OeschinenLake,
    name: 'Oeschinen Lake',
    location: 'Pasuruan, Indonesia',
  },
  {
    image: RhineFalls,
    name: 'Rhine Falls',
    location: 'Jawa Tengah, Indonesia',
  },
  {
    image: SunterLake,
    name: 'Sunter Lake',
    location: 'Jawa Tengah, Indonesia',
  },
  {
    image: Negeri,
    name: 'Negeri di atas Awan',
    location: 'Jawa Tengah, Indonesia',
  },
];

export { destinations };
