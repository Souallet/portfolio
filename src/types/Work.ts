import { type Techonology } from '@/types/Technology';
import { StaticImageData } from 'next/image';

export type Work = {
  name: string;
  description: string;
  image?: string | StaticImageData;
  links: {
    preview: string;
    sourceCode: string;
  };
  technologies: Techonology[];
};
