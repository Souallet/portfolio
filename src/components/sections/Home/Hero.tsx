import AvailibilityStatus from '@/components/availibility-status';
import { siteConfig } from '@/config/site';
import InovationIllustration from '@/images/innovation-bro.svg';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex gap-12 pt-20">
      <div className="flex flex-col gap-12 sm:pt-24 lg:pt-32">
        <h1 className="text-5xl font-bold tracking-tighter">{`Salut ! Moi, c'est Sébastien.`}</h1>
        <div className="flex">
          <p className="md:w-2/3 md:flex-1 md:text-xl lg:1/2 dark:text-zinc-100">
            {`Développeur FullStack, je réalise des applications web et mobile avec des technologies adaptées aux besoins techniques et fonctionnels afin de rendre l'expérience utilisateur optimale.`}
          </p>
        </div>

        <AvailibilityStatus
          available={siteConfig.available}
          description={`Mission longue durée`}
        />
      </div>
      <Image alt="Innovation Illustration" src={InovationIllustration} />
    </section>
  );
}
