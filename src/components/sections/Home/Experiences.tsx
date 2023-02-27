import SectionTitle from '@/components/templates/SectionTitle';
import Image from 'next/image';

import CadicServicesLogo from '../../../../public/images/cadic_logo.png';
import DisneylandParisLogo from '../../../../public/images/disneyland_paris_logo.png';
import LeboncoinLogo from '../../../../public/images/leboncoin_logo.png';
import OpenclassRoomsLogo from '../../../../public/images/openclassrooms_logo.png';

const companies = [
  {
    name: 'Leboncoin',
    logo: LeboncoinLogo,
  },
  {
    name: 'OpenClassRooms',
    logo: OpenclassRoomsLogo,
  },
  {
    name: 'Cadic Services',
    logo: CadicServicesLogo,
  },
  {
    name: 'Disneyland Paris',
    logo: DisneylandParisLogo,
  },
];

export default function ExperiencesSection() {
  const renderCompanies = (): React.ReactNode => {
    return companies.map((c, i) => (
      <Image
        key={i}
        className="grayscale hover:grayscale-0 transition duration-300 ease-in-out "
        src={c.logo}
        alt={`Logo ${c.name}`}
      />
    ));
  };

  return (
    <section className="my-16 px-8 md:px-12 lg:px-16">
      <SectionTitle>{`Ils m'ont fait confiance`}</SectionTitle>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center">
        {renderCompanies()}
      </div>
    </section>
  );
}
