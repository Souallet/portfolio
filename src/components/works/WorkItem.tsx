'use client';

import Image from 'next/image';

import { GithubIcon } from '@/components/icons';
import { Techonology } from '@/types/Technology';
import { Work } from '@/types/Work';
import { EyeIcon } from '@heroicons/react/20/solid';
import Card from '../templates/Card';

type Props = {
  work: Work;
  className?: string;
};

export default function WorkItem({ work, className = '' }: Props) {
  return (
    <Card className={`flex flex-col ${className}`}>
      <Image
        src={work.image}
        alt={`Illustration of ${work.name}`}
        className="rounded-xl"
        priority
      />
      <div className="p-2 md:p-6 md:text-left space-y-4">
        <h3 className="text-slate-900 text-2xl tracking-tight font-extrabold dark:text-white">
          {work.name}
        </h3>
        <p className="font-medium">{work.description}</p>
        <div className="flex justify-between">
          <div className="flex gap-2">
            {work.technologies.map((t: Techonology, i) => (
              <div key={i}>{t.name}</div>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={work.links.preview} target="_blank">
              <EyeIcon className="h-6 w-6" />
            </a>
            <a href={work.links.sourceCode} target="_blank">
              <GithubIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
