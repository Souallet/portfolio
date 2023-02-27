import {
  GithubIcon,
  GmailIcon,
  LinkedinIcon,
  MaltIcon,
  TwitchIcon,
  YoutubeIcon,
} from '@/components/icons';

const links = [
  {
    label: 'Expériences',
    link: '',
  },
  {
    label: 'Formations',
    link: '',
  },
  {
    label: 'Compétences',
    link: '',
  },
  {
    label: 'Réalisations',
    link: '',
  },
  {
    label: 'Contact',
    link: '',
  },
];

const socials = [
  {
    label: 'Github',
    link: '',
    icon: GithubIcon,
  },
  {
    label: 'Gmail',
    link: '',
    icon: GmailIcon,
  },
  {
    label: 'Youtube',
    link: '',
    icon: YoutubeIcon,
  },
  {
    label: 'Twitch',
    link: '',
    icon: TwitchIcon,
  },
  {
    label: 'Malt',
    link: '',
    icon: MaltIcon,
  },
  {
    label: 'Linkedin',
    link: '',
    icon: LinkedinIcon,
  },
];

export default function Footer() {
  const renderNav = () => {
    return links.map((l, i) => (
      <a
        key={i}
        className="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100"
        href={l.link}
      >
        {l.label}
      </a>
    ));
  };

  const renderSocials = () => {
    return socials.map((s, i) => (
      <a key={i} className="p-2" target="_blank" href={s.link}>
        <s.icon className="h-6 w-6" />
      </a>
    ));
  };

  return (
    <footer className="mb-8">
      <div className="mt-10 text-center flex flex-col items-center">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col md:flex-row items-center">
            {renderNav()}
          </div>
          <ul className="bg-gray-100 dark:bg-slate-800 flex items-center justify-center py-1 px-2 rounded-3xl shadow-sm mt-8">
            {renderSocials()}
          </ul>
        </div>
        {/* <div className="text-5xl my-10 cursor-pointer">⚡</div> */}
      </div>
    </footer>
  );
}
