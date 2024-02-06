export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Sébastien Ouallet',
  description: 'Portfolio de Sébastien Ouallet',
  available: false,
  navigation: [
    {
      href: 'realisations',
      title: 'Réalisations',
      disabled: false,
      external: false,
    },
    {
      href: 'formations',
      title: 'Formations',
      disabled: false,
      external: false,
    },
    {
      href: 'competences',
      title: 'Compétences',
      disabled: false,
      external: false,
    },
    {
      href: 'experiences',
      title: 'Expériences',
      disabled: false,
      external: false,
    },
    {
      href: 'contact',
      title: 'Contact',
      disabled: false,
      external: false,
    },
  ],
  links: {
    github: 'https://github.com/Souallet',
    youtube: '',
    twitch: '',
    malt: '',
    linkedin: '',
    mail: 'sebastien.ouallet@gmail.com',
  },
};
