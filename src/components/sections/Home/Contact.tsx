import { Button } from '@/components/ui/button';
import { Section, SectionBadge, SectionTitle } from '@/components/ui/section';
import { siteConfig } from '@/config/site';
import { useRouter } from 'next/navigation';

export default function ContactSection() {
  const router = useRouter();

  const redirectToMailTo = () => {
    router.push(`mailto:${siteConfig.links.mail}`);
  };

  return (
    <Section>
      <SectionBadge>Contact</SectionBadge>
      <SectionTitle>{`Restons en contact`}</SectionTitle>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-lg md:text-md lg:text-xl xl:text-2xl dark:text-zinc-100">
          {`Une idée en tête ? Parlons en !`}
        </p>
        <Button onClick={redirectToMailTo}>Envoyez-moi un mail !</Button>
      </div>
    </Section>
  );
}
