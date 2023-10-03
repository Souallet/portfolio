'use client';

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
} from '@images/programming';
import { Section, SectionTitle } from '@ui/section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';

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
    <Section>
      <SectionTitle>{`Compétences`}</SectionTitle>

      <Tabs defaultValue="0">
        <TabsList>
          {Object.keys(categories).map((category, i) => (
            <TabsTrigger key={category} value={`${i}`}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.values(categories).map((technologies, i) => (
          <TabsContent value={`${i}`} key={i}>
            <ul className="flex flex-row flex-wrap items-center gap-4 py-4">
              {technologies.map((t) => (
                <li key={t.name} className="relative rounded-md">
                  <div className="flex justify-center items-center h-24 w-24 p-4">
                    <Image src={t.image} alt={`Logo ${t.name}`} className="" />
                  </div>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
