import { Icons } from '@/components/icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/nav';
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
                  <>
                    <Link
                      key={index}
                      href={item.href}
                      className={cn(
                        'transition-colors hover:text-foreground text-foreground/70 py-1',
                        item.disabled && 'cursor-not-allowed opacity-80'
                      )}
                    >
                      {item.title}
                    </Link>
                    {items.length - 1 > index && <Separator className="my-2" />}
                  </>
                )
            )}
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  );
}
