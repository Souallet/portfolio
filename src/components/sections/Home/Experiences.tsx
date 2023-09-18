import SectionTitle from '@/components/templates/SectionTitle';
import Image from 'next/image';

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
    invert: false,
  },
  {
    name: 'Cadic Services',
    logo: CadicServicesLogo,
    maxHeight: 'max-h-7',
    invert: false,
  },
  {
    name: 'Leboncoin',
    logo: LeboncoinLogo,
    maxHeight: 'max-h-7',
    invert: false,
  },
  {
    name: 'Disneyland Paris',
    logo: DisneylandParisLogo,
    maxHeight: 'max-h-10',
    invert: true,
  },
];

export default function ExperiencesSection() {
  const renderCompanies = (): React.ReactNode => {
    return companies.map((c, i) => (
      <Image
        key={i}
        className={cx(
          `w-auto  brightness-200 contrast-200 grayscale`,
          c.maxHeight,
          c.invert ? 'invert' : 'invert-0'
        )}
        src={c.logo}
        alt={`Logo ${c.name}`}
      />
    ));
  };

  return (
    <section className="my-32">
      <SectionTitle>{`Ils m'ont fait confiance`}</SectionTitle>
      <div className="flex flex-wrap gap-8 md:gap-12 justify-between items-center">
        {renderCompanies()}
      </div>
    </section>
  );
}
