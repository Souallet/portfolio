import SectionTitle from '@/components/templates/SectionTitle';
import WorkItem from '@/components/works/WorkItem';
import { Work } from '@/types/Work';

import JudgeBot from '@/images/projects/judge-bot.png';
import NewsUnlocker from '@/images/projects/news-unlocker.png';
import NgBoilerplate from '@/images/projects/ng-boilerplate.png';

const works: Work[] = [
  {
    name: 'Leboncoin',
    description: 'Ceci est la description du projet.',
    image: JudgeBot,
    links: {
      preview: '',
      sourceCode: '',
    },
    technologies: [{ name: 'html' }, { name: 'css' }],
  },
  {
    name: 'Leboncoin',
    description: 'Ceci est la description du projet.',
    image: NewsUnlocker,
    links: {
      preview: '',
      sourceCode: '',
    },
    technologies: [{ name: 'html' }, { name: 'css' }],
  },
  {
    name: 'Leboncoin',
    description: 'Ceci est la description du projet.',
    image: NgBoilerplate,
    links: {
      preview: '',
      sourceCode: '',
    },
    technologies: [{ name: 'html' }, { name: 'css' }],
  },
];

export default function WorksSection() {
  const renderWorks = (): React.ReactNode => {
    return works.map((w, i) => <WorkItem key={i} work={w} />);
  };

  return (
    <section className="my-16 px-8 md:px-12 lg:px-16">
      <SectionTitle>{`Quelques projets`}</SectionTitle>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4   items-center">
        {renderWorks()}
      </div>
    </section>
  );
}
