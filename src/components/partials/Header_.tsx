import ThemeSwitcher from '@/components/ThemeSwitcher';
import Link from 'next/link';

const links = [
  {
    href: '/',
    label: 'Expériences',
  },
  {
    href: '/',
    label: 'Formations',
  },
  {
    href: '/',
    label: 'Compétences',
  },
  {
    href: '/',
    label: 'Réalisations',
  },
  {
    href: '/',
    label: 'Contact',
  },
];

export default function Header() {
  const renderLinks = (): React.ReactNode =>
    links.map((l, i) => (
      <Link key={i} href={l.href}>
        {l.label}
      </Link>
    ));

  return (
    <header className="py-4 container mx-auto flex justify-between items-center">
      <div id="logo">
        <Link href="/">SOuallet</Link>
      </div>

      <div className="flex items-center gap-4 divide-x ">
        <nav className="space-x-4">{renderLinks()}</nav>
        <div className="pl-4 space-x-4">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
