import Image from 'next/image';

import { Section, SectionTitle } from '@/components/ui/section';
import CadicServicesLogo from '@/images/companies/cadic_logo.png';
import DisneylandParisLogo from '@/images/companies/disneyland_paris_logo.png';
import LeboncoinLogo from '@/images/companies/leboncoin_logo.png';
import OpenclassRoomsLogo from '@/images/companies/openclassrooms_logo.png';
import { cx } from 'class-variance-authority';

const companies = [
  {
    name: 'OpenClassRooms',
    logo: OpenclassRoomsLogo,
    maxHeight: 'max-h-6',
  },
  {
    name: 'Cadic Services',
    logo: CadicServicesLogo,
    maxHeight: 'max-h-7',
  },
  {
    name: 'Leboncoin',
    logo: LeboncoinLogo,
    maxHeight: 'max-h-7',
  },
  {
    name: 'Disneyland Paris',
    logo: DisneylandParisLogo,
    maxHeight: 'max-h-10',
  },
];

export default function ExperiencesSection() {
  const renderCompanies = (): React.ReactNode => {
    return companies.map((c, i) => (
      <Image
        key={i}
        className={cx(`w-auto`, c.maxHeight)}
        src={c.logo}
        alt={`Logo ${c.name}`}
      />
    ));
  };

  return (
    <Section>
      <SectionTitle>{`Ils m'ont fait confiance`}</SectionTitle>
      <div className="flex flex-wrap gap-8 md:gap-12 justify-between items-center">
        {renderCompanies()}
      </div>
    </Section>
  );
}
