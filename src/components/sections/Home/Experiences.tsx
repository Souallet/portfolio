import Image from 'next/image';

import {
  Section,
  SectionDescription,
  SectionTitle,
} from '@/components/ui/section';

import { companies } from '@/data/companies';
import { cx } from 'class-variance-authority';

export default function ExperiencesSection() {
  const renderCompanies = (): React.ReactNode => {
    return companies.map((c, i) => (
      <Image
        key={i}
        className={cx('w-auto max-h-10')}
        src={c.logo ?? ''}
        alt={`Logo ${c.name}`}
      />
    ));
  };

  return (
    <Section>
      <SectionTitle>{`Ils m'ont fait confiance`}</SectionTitle>
      <SectionDescription>{`J'ai eu l'opportunité de les accompagner dans la réalisation de leurs projets.`}</SectionDescription>
      <div className="flex flex-wrap gap-8 md:gap-12 justify-between items-center">
        {renderCompanies()}
      </div>
    </Section>
  );
}
