import Image from 'next/image';

import {
  Section,
  SectionContent,
  SectionDescription,
  SectionTitle,
} from '@ui/section';

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
    <Section id="experiences">
      <SectionTitle>{`Ils m'ont fait confiance`}</SectionTitle>
      <SectionDescription>{`J'ai eu l'opportunité de les accompagner dans la réalisation de leurs projets.`}</SectionDescription>
      <SectionContent className="flex flex-wrap gap-8 md:gap-12 max-lg:justify-around justify-between items-center">
        {renderCompanies()}
      </SectionContent>
    </Section>
  );
}
