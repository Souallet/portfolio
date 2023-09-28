import Image from 'next/image';

import { Badge } from '@/components/ui/badge';

import { Icons } from '@/components/icons';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Techonology } from '@/types/technology';
import { Work } from '@/types/work';

type Props = {
  work: Work;
};

export default function WorksItem({ work }: Props) {
  const previewIsDisabled = !work.links.preview;
  return (
    <Card className="h-full flex flex-col justify-between ">
      <CardHeader>
        <CardTitle>{work.name}</CardTitle>
        <CardDescription className="pt-4">{work.description}</CardDescription>
        {work?.image && (
          <AspectRatio ratio={16 / 9} className="max-h-[10px]">
            <Image
              src={work.image}
              alt={`${work.name} illustration`}
              className="rounded-3xl "
            />
          </AspectRatio>
        )}
      </CardHeader>
      <CardFooter className="flex justify-between">
        <div className="flex flex-wrap items-end gap-2 lg:gap-4">
          {work.technologies.map((t: Techonology, i) => (
            <Badge
              className="p-2 px-3 flex gap-2 uppercase items-end"
              variant="secondary"
            >
              <Image
                key={i}
                src={t.image}
                alt={`${t.name} Icon`}
                className="h-4 w-4"
              />
              <span className="font-medium">{t.name}</span>
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          {!previewIsDisabled && (
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
          )}
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
        </div>
      </CardFooter>
    </Card>
  );
}
