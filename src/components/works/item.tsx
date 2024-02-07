import Image from 'next/image';

import { Badge } from '@ui/badge';

import { Icons } from '@/components/icons';
import { Techonology } from '@/types/Technology';
import { Work } from '@/types/Work';
import { AspectRatio } from '@ui/aspect-ratio';
import { buttonVariants } from '@ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/card';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@ui/tooltip';

export default function WorksItem({ work }: { work: Work }) {
  const previewIsDisabled = !work.links.preview;
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="mb-6">{work.name}</CardTitle>
        {work?.image && (
          <AspectRatio ratio={16 / 9} className="max-h-[10px]">
            <Image
              src={work.image.light}
              alt={`${work.name} illustration`}
              className="rounded-3xl block dark:hidden"
            />
            <Image
              src={work.image.dark}
              alt={`${work.name} illustration`}
              className="rounded-3xl hidden dark:block"
            />
          </AspectRatio>
        )}
        <CardDescription className="m-0">{work.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-start">
        <div className="flex flex-wrap items-end gap-2 lg:gap-4">
          {work.technologies.map((t: Techonology, i) => (
            <Badge
              className="p-2 px-3 flex gap-2 uppercase items-end"
              variant="secondary"
              key={i}
            >
              {/* <Image
                key={i}
                src={t.image}
                alt={`${t.name} Icon`}
                className="h-4 w-4"
              /> */}
              <span className="text-xs font-medium text-muted-foreground">
                {t.name}
              </span>
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:gap-4 ">
          {!previewIsDisabled && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    className={buttonVariants({
                      size: 'icon',
                      variant: 'ghost',
                    })}
                    href={work.links.preview}
                    target="_blank"
                  >
                    <Icons.eye className="h-6 w-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Prévisualiser le projet</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a
                  className={buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                  })}
                  href={work.links.sourceCode}
                  target="_blank"
                >
                  <Icons.github className="h-5 w-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Afficher le code source</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
}
