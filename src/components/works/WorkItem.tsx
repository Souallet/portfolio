'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Techonology } from '@/types/Technology';
import { Work } from '@/types/Work';
import { EyeIcon } from '@heroicons/react/20/solid';
import { Icons } from '../icons';

type Props = {
  work: Work;
};

export default function WorkItem({ work }: Props) {
  return (
    <Card className="h-full flex flex-col justify-between ">
      <CardHeader>
        <CardTitle>{work.name}</CardTitle>
        <CardDescription>{work.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <div className="flex flex-wrap gap-2 lg:gap-4">
          {work.technologies.map((t: Techonology, i) => (
            <Image
              key={i}
              src={t.image}
              alt={`${t.name} Icon`}
              className="h-6 w-6"
            />
          ))}
        </div>
        <div className="flex gap-2 lg:gap-4">
          <a href={work.links.preview} target="_blank">
            <EyeIcon className="h-6 w-6" />
          </a>
          <a href={work.links.sourceCode} target="_blank">
            <Icons.github className="h-5 w-5" />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
