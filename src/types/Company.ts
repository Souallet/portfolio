import { StaticImageData } from 'next/image';

export type Company = {
  name: string;
  logo?: StaticImageData | string;
};
