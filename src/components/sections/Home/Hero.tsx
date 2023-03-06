'use client';

import AvailibilityStatus from '@/components/AvailibilityStatus';
import Button from '@/components/templates/Button';
import MainTitle from '@/components/templates/MainTitle';
import { getSocialPath } from '@/utils/socials';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const redirectToMailTo = () => {
    router.push(getSocialPath('Mail')?.path ?? '/');
  };

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
        <Button style="primary" onClick={redirectToMailTo}>
          Contactez-moi !
        </Button>
      </div>
    </section>
  );
}
