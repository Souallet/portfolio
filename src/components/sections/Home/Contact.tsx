import Button from '@/components/templates/Button';
import SectionTitle from '@/components/templates/SectionTitle';
import { siteConfig } from '@/config/site';
import { useRouter } from 'next/navigation';

export default function ContactSection() {
  const router = useRouter();

  const redirectToMailTo = () => {
    router.push(`mailto:${siteConfig.links.mail}`);
  };

  return (
    <section className="my-32 flex flex-col">
      <SectionTitle>{`Restons en contact`}</SectionTitle>
      <div className="flex items-center justify-between">
        <p className="text-lg md:text-md lg:text-xl xl:text-2xl dark:text-zinc-100">
          {`Une idée en tête ? Parlons en !`}
        </p>
        <Button
          style="primary"
          className="max-w-fit"
          onClick={redirectToMailTo}
        >
          Envoyez-moi un mail !
        </Button>
      </div>
    </section>
  );
}
