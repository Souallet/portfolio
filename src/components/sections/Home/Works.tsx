import WorkItem from '@/components/works/WorkItem';
import { Work } from '@/types/Work';

import JudgeBot from '@/images/projects/judge-bot.png';

import { Section, SectionTitle } from '@/components/ui/section';
import { Css, Html } from '@/images/programming';

const works: Work[] = [
  {
    name: 'Leboncoin',
    description: 'Ceci est la description du projet.',
    image: JudgeBot,
    links: {
      preview: '',
      sourceCode: '',
    },
    technologies: [
      { name: 'html', image: Html },
      { name: 'css', image: Css },
    ],
  },
  {
    name: 'Leboncoin',
    description: 'Ceci est la description du projet.',
    links: {
      preview: '',
      sourceCode: '',
    },
    technologies: [
      { name: 'html', image: Html },
      { name: 'css', image: Css },
    ],
  },
  {
    name: 'Leboncoin',
    description: 'Ceci est la description du projet.',
    links: {
      preview: '',
      sourceCode: '',
    },
    technologies: [
      { name: 'html', image: Html },
      { name: 'css', image: Css },
    ],
  },
];

export default function WorksSection() {
  return (
    <Section>
      <SectionTitle>{`Mes réalisations`}</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <WorkItem work={works[0]} />
        </div>
        <div className="col-span-1 flex flex-col gap-8">
          <div className="h-1/2">
            <WorkItem work={works[1]} />
          </div>
          <div className="h-1/2">
            <WorkItem work={works[2]} />
          </div>
        </div>
      </div>
    </Section>
  );
}
