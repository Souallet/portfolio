import AvailibilityStatus from '@/components/availibility-status';
import { siteConfig } from '@/config/site';
import InovationIllustration from '@images/innovation-bro.svg';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex gap-10 pt-20 items-center sm:pt-24 lg:pt-28">
      <div className="flex flex-col gap-12 ">
        <div className="space-y-4">
          <p className="uppercase font-extrabold tracking-wider text-muted-foreground">
            Bienvenue sur mon portfolio !
          </p>
          <h1 className="text-5xl font-bold tracking-tighter">
            {`Moi, c'est Sébastien`}
            <span className="ml-2 animate-waving-hand">👋🏻</span>
          </h1>
        </div>
        <p className="md:text-xl">
          {`Développeur FullStack, je réalise des applications web et mobile avec des technologies adaptées aux besoins techniques et fonctionnels afin de rendre l'expérience utilisateur optimale.`}
        </p>

        <AvailibilityStatus
          available={siteConfig.available}
          description={`Mission longue durée`}
        />
      </div>
      <Image
        alt="Innovation Illustration"
        src={InovationIllustration}
        priority={false}
        className="hidden md:block md:max-w-xs lg: lg:max-w-none"
      />
    </section>
  );
}
