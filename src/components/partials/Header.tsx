import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { Icons } from '../icons';
import { MainNav } from '../main-nav';
import { buttonVariants } from '../ui/button';

const navigation = [
  {
    path: '/',
    title: 'Réalisations',
  },
  {
    path: '/',
    title: 'Formations',
  },
  {
    path: '/',
    title: 'Compétences',
  },
  {
    path: '/',
    title: 'Expériences',
  },
  {
    path: '/',
    title: 'Contact',
  },
];

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.navigation} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
