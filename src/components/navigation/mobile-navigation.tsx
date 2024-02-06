'use client';
import { Icons } from '@/components/icons';
import { scrolltoHash } from '@/lib/scroll';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/nav';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';
import { Separator } from '@ui/separator';
import Link from 'next/link';

interface MobileNavProps {
  items: NavItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  return (
    <div className="md:hidden">
      <Popover>
        <PopoverTrigger className="flex items-center">
          <Icons.menu />
        </PopoverTrigger>

        <PopoverContent className="mt-4 md:hidden rounded-r-none rounded-tl-none">
          <nav className="flex flex-col">
            {items?.map(
              (item, index) =>
                item.href && (
                  <div key={index}>
                    <Link
                      href={item.href}
                      className={cn(
                        'transition-colors hover:text-foreground text-foreground/70 py-1',
                        item.disabled && 'cursor-not-allowed opacity-80'
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        scrolltoHash(item.href ?? '');
                      }}
                    >
                      {item.title}
                    </Link>
                    {items.length - 1 > index && <Separator className="my-2" />}
                  </div>
                )
            )}
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  );
}
