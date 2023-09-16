import AvailibilityStatus from '@/components/AvailibilityStatus';
import MainTitle from '@/components/templates/MainTitle';

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-12 pt-20 sm:pt-24 lg:pt-32">
      <MainTitle>{`Salut ! Moi, c'est Sébastien.`}</MainTitle>
      <p className="text-zinc-200 md:text-xl dark:text-zinc-100">
        {`Développeur FullStack, je réalise des applications web et mobile avec des technologies adaptées aux besoins techniques et fonctionnels afin de rendre l'expérience utilisateur optimale.`}
      </p>

      <AvailibilityStatus
        available={false}
        description={`Mission longue durée`}
      />
    </section>
  );
}
