import ContactForm from '@/components/forms/contact';
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionTitle,
} from '@ui/section';

import EnvelopeIllustration from '@images/envelope-bro.svg';
import Image from 'next/image';

export default function ContactSection() {
  // const router = useRouter();
  // const redirectToMailTo = () => {
  //   router.push(`mailto:${siteConfig.links.mail}`);
  // };

  return (
    <Section id="contact">
      <SectionTitle>{`Restons en contact`}</SectionTitle>
      <SectionDescription>
        Une idée en tête ? Parlons en !
        {/* <Button onClick={redirectToMailTo}>Envoyez-moi un mail !</Button> */}
      </SectionDescription>
      <SectionContent className="flex flex-row gap-10 items-center justify-between">
        <ContactForm />
        <Image
          alt="Innovation Illustration"
          src={EnvelopeIllustration}
          priority={false}
          className="hidden md:block md:max-w-xs lg:max-w-md"
        />
      </SectionContent>
    </Section>
  );
}
