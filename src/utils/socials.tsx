import { socials } from '@/data/socials';

export const getSocialPath = (socialName: string) => {
  return socials.find((s) => s.name === socialName);
};
