import AvailibilityStatus from '@/components/AvailibilityStatus';
import MainTitle from '@/components/templates/MainTitle';

export default function HeroSection() {
  return (
    <section className="relative max-w-4xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <MainTitle>{`Salut ! Moi, c'est Sébastien.`}</MainTitle>
      <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
        {`Développeur FullStack, je réalise des applications web et mobile avec des technologies adaptées aux besoins techniques et fonctionnels afin de rendre l'expérience utilisateur optimale.`}
      </p>

      <div className="flex flex-col sm:flex-row justify-evenly gap-8 md:gap-12 xl:gap-16 my-4 md:my-8">
        <AvailibilityStatus
          available={false}
          description={`Mission longue durée`}
        />
      </div>

      <div className="flex justify-center space-x-6 text-sm">
        <a
          className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
          href="/docs/installation"
        >
          Contactez-moi !
        </a>
      </div>
    </section>
  );
}
