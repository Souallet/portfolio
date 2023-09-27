import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { ActionsNav } from '../navigation/actions-nav';
import { MainNav } from '../navigation/main-nav';
import MobileNav from '../navigation/mobile-navigation';

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center gap-5 justify-between">
        <Link href="/" className="text-lg font-bold shrink-0">
          <span className="">{siteConfig.name}</span>
        </Link>

        <div className="hidden md:flex ">
          <MainNav items={siteConfig.navigation} />
        </div>
        <ActionsNav />
        <MobileNav items={siteConfig.navigation ?? []} />
      </div>
    </header>
  );
}
