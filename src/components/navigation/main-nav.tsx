'use client';
import Link from 'next/link';

import { scrolltoHash } from '@/lib/scroll';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/nav';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrolltoHash(item.href ?? '');
                  }}
                  className={cn(
                    'transition-colors hover:text-foreground text-foreground/70',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
