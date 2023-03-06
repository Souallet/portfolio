import Button from '@/components/templates/Button';
import SectionTitle from '@/components/templates/SectionTitle';
import { getSocialPath } from '@/utils/socials';
import { useRouter } from 'next/navigation';

export default function ContactSection() {
  const router = useRouter();

  const redirectToMailTo = () => {
    router.push(getSocialPath('Mail')?.path ?? '/');
  };

  return (
    <section className="my-32 px-8 md:px-12 lg:px-16 flex flex-col items-center text-center">
      <SectionTitle>{`Restons en contact`}</SectionTitle>
      <p className="mb-8 opacity-50 text-lg md:text-md lg:text-xl xl:text-2xl">
        {`Une idée en tête ? Parlons en !`}
      </p>
      <Button style="primary" onClick={redirectToMailTo}>
        Envoyez-moi un mail !
      </Button>
    </section>
  );
}
