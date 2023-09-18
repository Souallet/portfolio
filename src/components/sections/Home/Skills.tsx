'use client';

import SectionTitle from '@/components/templates/SectionTitle';
import { Tab } from '@headlessui/react';
import { useState } from 'react';

import Image from 'next/image';

import {
  Angular,
  Css,
  Docker,
  Express,
  Git,
  Html,
  Javascript,
  MongoDB,
  MySQL,
  Netlify,
  Nextjs,
  Nodejs,
  PHP,
  React,
  Sass,
  Symfony,
  Typescript,
  VSCode,
} from '@/images/programming';
import { cx } from 'class-variance-authority';

export default function SkillsSection() {
  let [categories] = useState({
    Basics: [
      {
        name: 'HTML',
        image: Html,
      },
      {
        name: 'CSS',
        image: Css,
      },
      {
        name: 'JavaScript',
        image: Javascript,
      },
      {
        name: 'TypeScript',
        image: Typescript,
      },
    ],
    Front: [
      {
        name: 'Angular',
        image: Angular,
      },
      {
        name: 'React.js',
        image: React,
      },
      {
        name: 'Next.js',
        image: Nextjs,
      },
      {
        name: 'Sass',
        image: Sass,
      },
    ],
    Back: [
      {
        name: 'PHP',
        image: PHP,
      },
      {
        name: 'Symfony',
        image: Symfony,
      },
      {
        name: 'NodeJS',
        image: Nodejs,
      },
      {
        name: 'Express',
        image: Express,
      },
      {
        name: 'MySQL',
        image: MySQL,
      },
      {
        name: 'MongoDB',
        image: MongoDB,
      },
    ],
    Toolsbox: [
      {
        name: 'VS Code',
        image: VSCode,
      },
      {
        name: 'Docker',
        image: Docker,
      },
      {
        name: 'Git',
        image: Git,
      },
      {
        name: 'Netlify',
        image: Netlify,
      },
    ],
    Softskills: [],
  });

  return (
    <section className="my-32">
      <SectionTitle>{`Compétences`}</SectionTitle>
      <Tab.Group>
        <Tab.List className="flex flex-wrap space-x-1 p-1 w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                cx(
                  'inline-block p-4 border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
                  selected
                    ? 'font-bold text-slate-900 border-slate-900 dark:text-gray-300 dark:border-gray-300 '
                    : 'border-transparent hover:border-gray-300 dark:hover:text-gray-300'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((technologies, idx) => (
            <Tab.Panel
              key={idx}
              className="ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none"
            >
              <ul className="flex flex-row flex-wrap items-center gap-4 py-4">
                {technologies.map((t) => (
                  <li key={t.name} className="relative rounded-md">
                    <div className="flex justify-center items-center h-24 w-24 p-4">
                      <Image
                        src={t.image}
                        alt={`Logo ${t.name}`}
                        className=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
