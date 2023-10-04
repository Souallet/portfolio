import { siteConfig } from '@/config/site';
import { Button } from '@ui/button';
import { Section, SectionDescription, SectionTitle } from '@ui/section';
import { useRouter } from 'next/navigation';

export default function ContactSection() {
  const router = useRouter();

  const redirectToMailTo = () => {
    router.push(`mailto:${siteConfig.links.mail}`);
  };

  return (
    <Section>
      <SectionTitle>{`Restons en contact`}</SectionTitle>
      <SectionDescription className="flex flex-wrap items-center justify-between">
        <p className="text-lg md:text-md lg:text-xl xl:text-2xl">
          Une idée en tête ? Parlons en !
        </p>
        <Button onClick={redirectToMailTo}>Envoyez-moi un mail !</Button>
      </SectionDescription>
    </Section>
  );
}
