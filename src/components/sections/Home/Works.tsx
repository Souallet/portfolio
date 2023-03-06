import SectionTitle from '@/components/templates/SectionTitle';
import WorkItem from '@/components/works/WorkItem';
import { Work } from '@/types/Work';

import JudgeBot from '@/images/projects/judge-bot.png';
import NewsUnlocker from '@/images/projects/news-unlocker.png';
import NgBoilerplate from '@/images/projects/ng-boilerplate.png';

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
    image: NewsUnlocker,
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
    image: NgBoilerplate,
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
  const renderWorks = (): React.ReactNode => {
    return works.map((w, i) => (
      <WorkItem key={i} work={w} className="w-full sm:w-[45%] md:w-[30%]" />
    ));
  };

  return (
    <section className="my-32 px-8 md:px-12 lg:px-16">
      <SectionTitle>{`Quelques projets`}</SectionTitle>
      <div className="flex flex-wrap justify-center items-center sm:gap-x-[10%] md:gap-x-[5%]  gap-y-10">
        {renderWorks()}
      </div>
    </section>
  );
}
