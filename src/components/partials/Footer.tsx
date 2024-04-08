'use client';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { scrolltoHash } from '@/libs/scroll';
import { buttonVariants } from '@ui/button';

export default function Footer() {
  const renderNav = () => {
    return siteConfig.navigation.map((link, i) => (
      <Link
        key={i}
        className="mx-2 opacity-80 transition-opacity duration-200 text-sm ease-in-out hover:opacity-100"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrolltoHash(link.href ?? '');
        }}
      >
        {link.title}
      </Link>
    ));
  };

  return (
    <footer className="border-t py-4 flex flex-col md:flex-row space-between">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center">
          {renderNav()}
        </div>
        <div className="flex items-center justify-center p-2">
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

          <Link href={siteConfig.links.mail} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: 'icon',
                variant: 'ghost',
              })}
            >
              <Icons.gmail className="h-5 w-5" />
              <span className="sr-only">GMail</span>
            </div>
          </Link>

          <Link
            href={siteConfig.links.youtube}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: 'icon',
                variant: 'ghost',
              })}
            >
              <Icons.youtube className="h-5 w-5" />
              <span className="sr-only">Youtube</span>
            </div>
          </Link>

          <Link href={siteConfig.links.twitch} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: 'icon',
                variant: 'ghost',
              })}
            >
              <Icons.twitch className="h-5 w-5" />
              <span className="sr-only">Twitch</span>
            </div>
          </Link>

          <Link href={siteConfig.links.malt} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: 'icon',
                variant: 'ghost',
              })}
            >
              <Icons.malt className="h-5 w-5" />
              <span className="sr-only">Malt</span>
            </div>
          </Link>

          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: 'icon',
                variant: 'ghost',
              })}
            >
              <Icons.linkedin className="h-5 w-5" />
              <span className="sr-only">Linkedin</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
