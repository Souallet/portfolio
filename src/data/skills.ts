import { Skill } from '@/types/Skill';
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

const skills: Skill[] = [
  {
    name: 'HTML',
    image: Html,
    category: 'frontend',
  },
  {
    name: 'CSS',
    image: Css,
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    image: Javascript,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    image: Typescript,
    category: 'frontend',
  },
  {
    name: 'Angular',
    image: Angular,
    category: 'others',
  },
  {
    name: 'React.js',
    image: React,
    category: 'frontend',
  },
  {
    name: 'Next.js',
    image: Nextjs,
    category: 'frontend',
  },
  {
    name: 'PHP',
    image: PHP,
    category: 'backend',
  },
  {
    name: 'Symfony',
    image: Symfony,
    category: 'backend',
  },
  {
    name: 'NodeJS',
    image: Nodejs,
    category: 'backend',
  },
  {
    name: 'Express',
    image: Express,
    category: 'backend',
  },
  {
    name: 'MySQL',
    image: MySQL,
    category: 'backend',
  },
  {
    name: 'MongoDB',
    image: MongoDB,
    category: 'backend',
  },
  {
    name: 'Sass',
    image: Sass,
    category: 'tools',
  },
  {
    name: 'VS Code',
    image: VSCode,
    category: 'tools',
  },
  {
    name: 'Docker',
    image: Docker,
    category: 'tools',
  },
  {
    name: 'Git',
    image: Git,
    category: 'tools',
  },
  {
    name: 'Netlify',
    image: Netlify,
    category: 'tools',
  },
];

export const skillsCategories = skills
  .map((item) => item.category)
  .filter((value, index, self) => self.indexOf(value) === index);

export const getSkillsByCategory = (category: string): Skill[] =>
  skills.filter((skill) => skill.category === category);
