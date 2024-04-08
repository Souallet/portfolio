import { Section, SectionContent, SectionTitle } from '@/components/ui/section';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Section id="competences">
      <SectionTitle>{`La page recherchée est introuvable.`}</SectionTitle>
      <SectionContent>
        {`Pour retourner à l'accueil : `}
        <Link href="/" className="underline">
          Cliquez ici
        </Link>
      </SectionContent>
    </Section>
  );
}
