import PlugBroIllustration from '@images/plug-bro.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-wrap justify-evenly min-h-100 items-center my-0 grow">
      <Image
        alt="404 Not found Illustration"
        src={PlugBroIllustration}
        priority={true}
        className="md:max-w-md"
      />
      <div className=" flex flex-col max-lg:text-center gap-8">
        <h1 className="text-3xl tracking-wide font-bold">{`La page recherchée est introuvable.`}</h1>
        <p>
          {`Pour retourner à l'accueil : `}
          <span>
            <Link href="/" className="underline">
              Cliquez ici
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
}
