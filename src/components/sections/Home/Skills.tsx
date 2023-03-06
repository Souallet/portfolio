'use client';

import Card from '@/components/templates/Card';
import SectionTitle from '@/components/templates/SectionTitle';
import { Tab } from '@headlessui/react';
import { useState } from 'react';

import Image from 'next/image';

import CssIcon from '@/images/programming/css.svg';
import HtmlIcon from '@/images/programming/html.svg';
import JavascriptIcon from '@/images/programming/javascript.svg';
import TypescriptIcon from '@/images/programming/typescript.svg';

import AngularIcon from '@/images/programming/angular.svg';
import NextIcon from '@/images/programming/nextjs.svg';
import ReactIcon from '@/images/programming/react.svg';
import SassIcon from '@/images/programming/sass.svg';

import ExpressIcon from '@/images/programming/express.svg';
import MongoDBIcon from '@/images/programming/mongodb.svg';
import MySqlIcon from '@/images/programming/mysql.svg';
import NodejsIcon from '@/images/programming/nodejs.svg';
import PhpIcon from '@/images/programming/php.svg';
import SymfonyIcon from '@/images/programming/symfony.svg';

import DockerIcon from '@/images/programming/docker.svg';
import GitIcon from '@/images/programming/git.svg';
import NetlifyIcon from '@/images/programming/netlify.svg';
import VsCodeIcon from '@/images/programming/vscode.svg';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function SkillsSection() {
  let [categories] = useState({
    Basics: [
      {
        name: 'HTML',
        image: HtmlIcon,
      },
      {
        name: 'CSS',
        image: CssIcon,
      },
      {
        name: 'JavaScript',
        image: JavascriptIcon,
      },
      {
        name: 'TypeScript',
        image: TypescriptIcon,
      },
    ],
    Front: [
      {
        name: 'Angular',
        image: AngularIcon,
      },
      {
        name: 'React.js',
        image: ReactIcon,
      },
      {
        name: 'Next.js',
        image: NextIcon,
      },
      {
        name: 'Sass',
        image: SassIcon,
      },
    ],
    Back: [
      {
        name: 'PHP',
        image: PhpIcon,
      },
      {
        name: 'Symfony',
        image: SymfonyIcon,
      },
      {
        name: 'NodeJS',
        image: NodejsIcon,
      },
      {
        name: 'Express',
        image: ExpressIcon,
      },
      {
        name: 'MySQL',
        image: MySqlIcon,
      },
      {
        name: 'MongoDB',
        image: MongoDBIcon,
      },
    ],
    Toolsbox: [
      {
        name: 'VS Code',
        image: VsCodeIcon,
      },
      {
        name: 'Docker',
        image: DockerIcon,
      },
      {
        name: 'Git',
        image: GitIcon,
      },
      {
        name: 'Netlify',
        image: NetlifyIcon,
      },
    ],
    Softskills: [],
  });

  return (
    <section className="my-32 px-8 md:px-12 lg:px-16">
      <SectionTitle>{`Compétences`}</SectionTitle>
      <Tab.Group>
        <Tab.List className="flex space-x-1 p-1 justify-center w-full text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'inline-block p-4 border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
                  selected
                    ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
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
              <ul className="flex flex-row flex-wrap justify-center items-center gap-4 py-4">
                {technologies.map((t) => (
                  <li key={t.name} className="relative rounded-md">
                    <Card className="flex justify-center items-center h-24 w-24 p-4">
                      <Image
                        src={t.image}
                        alt={`Logo ${t.name}`}
                        className=""
                      />
                    </Card>
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
