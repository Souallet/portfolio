import Link from 'next/link';

import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function ActionsNav() {
  return (
    <div className="flex flex-1 items-center justify-end space-x-4">
      <nav className="flex items-center space-x-1">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: 'icon',
              variant: 'ghost',
            })}
          >
            <Icons.github className="h-5 w-5" />
            <span className="sr-only">Github</span>
          </div>
        </Link>
        <ThemeToggle />
      </nav>
    </div>
  );
}
