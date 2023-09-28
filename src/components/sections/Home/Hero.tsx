import AvailibilityStatus from '@/components/availibility-status';
import { siteConfig } from '@/config/site';

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-12 pt-20 sm:pt-24 lg:pt-32">
      <h1 className="text-5xl font-bold tracking-tighter">{`Salut ! Moi, c'est Sébastien.`}</h1>
      <div className="flex">
        <p className="md:w-2/3 md:flex-1 md:text-xl lg:1/2 dark:text-zinc-100">
          {`Développeur FullStack, je réalise des applications web et mobile avec des technologies adaptées aux besoins techniques et fonctionnels afin de rendre l'expérience utilisateur optimale.`}
        </p>
        <div className="hidden md:block md:w-1/3 lg:1/2"></div>
      </div>

      <AvailibilityStatus
        available={siteConfig.available}
        description={`Mission longue durée`}
      />
    </section>
  );
}
