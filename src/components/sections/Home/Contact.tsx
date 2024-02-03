import ContactForm from '@/components/forms/contact';
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionTitle,
} from '@ui/section';

export default function ContactSection() {
  // const router = useRouter();
  // const redirectToMailTo = () => {
  //   router.push(`mailto:${siteConfig.links.mail}`);
  // };

  return (
    <Section>
      <SectionTitle>{`Restons en contact`}</SectionTitle>
      <SectionDescription>
        Une idée en tête ? Parlons en !
        {/* <Button onClick={redirectToMailTo}>Envoyez-moi un mail !</Button> */}
      </SectionDescription>
      <SectionContent className="">
        <ContactForm />
      </SectionContent>
    </Section>
  );
}
