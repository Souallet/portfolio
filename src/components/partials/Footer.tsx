import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function Footer() {
  const renderNav = () => {
    return siteConfig.navigation.map((link, i) => (
      <a
        key={i}
        className="mx-2 opacity-50 transition-opacity duration-200 ease-in-out hover:opacity-100"
        href={link.href}
      >
        {link.title}
      </a>
    ));
  };

  return (
    <footer className="mb-8">
      <div className="mt-10 flex flex-col">
        <div className="flex flex-col items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center">
            {renderNav()}
          </div>
          <Card className="flex items-center justify-center p-2">
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

            <Link
              href={siteConfig.links.twitch}
              target="_blank"
              rel="noreferrer"
            >
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
          </Card>
        </div>
      </div>
    </footer>
  );
}
