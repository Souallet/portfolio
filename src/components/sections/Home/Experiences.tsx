import Card from '@/components/templates/Card';
import SectionTitle from '@/components/templates/SectionTitle';
import Image from 'next/image';

import CadicServicesLogo from '@/images/companies/cadic_logo.png';
import DisneylandParisLogo from '@/images/companies/disneyland_paris_logo.png';
import LeboncoinLogo from '@/images/companies/leboncoin_logo.png';
import OpenclassRoomsLogo from '@/images/companies/openclassrooms_logo.png';

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
    maxHeight: 'max-h-8',
  },
  {
    name: 'Disneyland Paris',
    logo: DisneylandParisLogo,
    maxHeight: 'max-h-8',
  },
];

export default function ExperiencesSection() {
  const renderCompanies = (): React.ReactNode => {
    return companies.map((c, i) => (
      <Image
        key={i}
        className={`w-auto ${c.maxHeight}`}
        src={c.logo}
        alt={`Logo ${c.name}`}
      />
    ));
  };

  return (
    <section className="my-32 px-8 md:px-12 lg:px-16">
      <SectionTitle>{`Ils m'ont fait confiance`}</SectionTitle>
      <Card className="p-6 md:px-8 flex flex-wrap gap-8 md:gap-12 justify-evenly items-end">
        {renderCompanies()}
      </Card>
    </section>
  );
}
