import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Section,
  SectionBadge,
  SectionDescription,
  SectionTitle,
} from '@/components/ui/section';
import { cx } from 'class-variance-authority';
import { useCallback, useState } from 'react';

const testimonials = [
  {
    firstname: 'Valentin',
    lastname: 'Gerum',
    job_title: 'Engineering Manager',
    company: 'Leboncoin',
    source: 'https://www.malt.fr/profile/sebastienouallet',
    date: new Date(2023, 5, 19),
    testimonial: `Une super collaboration avec Sebastien en charge de nous aider à faire évoluer nos parcours d'authentification. Bonne prise en main du sujet, échange fluide au sein de l'équipe et des développeurs autour de lui. Je recommande.`,
    icon: '',
  },
  {
    firstname: 'Laurent',
    lastname: 'Ausset-Delon',
    job_title: 'Directeur général exécutif',
    company: 'Cadic Services',
    source: 'https://www.linkedin.com/in/sebastien-ouallet',
    date: new Date(2022, 10, 23),
    testimonial: `Sébastien s'est intégré très rapidement au sein des équipes de la société. Aussi bien auprès des développeurs avec lesquels il travaillait au quotidien, mais aussi avec l'équipe opérationnelle pour laquelle il opérait régulièrement en soutien technique.
    Professionnel sur tous les aspects des missions qui lui ont été confiées, il a toujours produit un code de grande qualité et, ce qui est plus rare, un même niveau d'excellence sur la documentation inhérente.
    Toutes les personnes avec lesquelles il a collaboré ont été unanimes... Ses grandes qualités humaines et techniques faisaient de Sébastien un collaborateur avec lequel il était facile et agréable de travailler.`,
    icon: '',
  },
  {
    firstname: 'Sébastien',
    lastname: 'Mannino',
    job_title: 'Responsable R&D',
    company: 'Cadic Services',
    source: 'https://www.linkedin.com/in/sebastien-ouallet',
    date: new Date(2022, 8, 19),
    testimonial: `Sébastien a intégré notre équipe de développement en alternance pendant deux ans. Dès son arrivée nous avons décelé un fort potentiel. Sébastien nous a rejoint avec un bagage technique solide et déjà une méthodologie de travail rigoureuse. Outre ses qualités de développeur nous avons fortement apprécié ses capacités de communication vers des publics non techniques et plus encore la qualité de ses documentations.
    Sébastien a rapidement pris des compétences sur nos outils métier (Ged, Knowledge Management, record management) et il s'est révélé très efficace dans le développement de nouveaux modules mais aussi dans l'intégration avec d'autres applications.
    Nous avons recruté Sébastien immédiatement dans la continuité de sa formation en alternance.
    Au total il a passé 4 ans dans notre société et il a participé très activement à la vie et aux évolutions de notre produit.
    Il est d'humeur égale, s'adapte vite au changement et est très autonome.
    Un excellent développeur Fullstack qui vole désormais de ses propres ailes.`,
    icon: '',
  },
  {
    firstname: 'Cédric',
    lastname: 'Ouallet',
    job_title: 'Entrepreneur',
    company: 'Indépendant',
    source: 'https://www.linkedin.com/in/sebastien-ouallet',
    date: new Date(2022, 5, 2),
    testimonial: `Sébastien est très professionnel, ponctuel et consciencieux.
    Je vous le recommande.`,
    icon: '',
  },
];

export default function TestimonialsSection() {
  return (
    <Section>
      <SectionBadge>Témoignages</SectionBadge>
      <SectionTitle>Leurs avis</SectionTitle>
      <SectionDescription>{`Ce qu'ils ont pensé de notre collaboration`}</SectionDescription>

      <div className="grid grid-cols-2 gap-8 items-baseline">
        <div className="grid gap-8">
          <Testimonial testimonial={testimonials[0]} />
          <Testimonial testimonial={testimonials[1]} />
        </div>
        <div className="grid gap-8">
          <Testimonial testimonial={testimonials[2]} />
          <Testimonial testimonial={testimonials[3]} />
        </div>
      </div>
    </Section>
  );
}

const Testimonial = ({ testimonial }: { testimonial: any }) => {
  const [shouldTruncate, setShouldTruncate] = useState<boolean>(false);
  const [readMore, setReadMore] = useState<boolean>(false);

  const measuredRef = useCallback(
    (node: any) => {
      // Before the component mounts the node ref will be null
      if (node?.parentElement) {
        // Calculate the number of lines based on height
        const elHeight = node.offsetHeight;
        const styles = window.getComputedStyle(node);
        const lineHeight = styles
          .getPropertyValue('line-height')
          .replace('px', '');
        const elLineCount = elHeight / parseInt(lineHeight, 10);

        setShouldTruncate(elLineCount > 3);
      }
    },
    [testimonial.testimonial]
  );

  return (
    <Card className="space-y-4">
      <CardHeader className="flex flex-col gap-2 pb-0">
        <CardTitle className="flex flex-wrap justify-between gap-3">
          {testimonial.firstname} {testimonial.lastname}
          <span className="text-sm text-muted-foreground">
            @{testimonial.company}
          </span>
        </CardTitle>
        <CardDescription>{testimonial.job_title}</CardDescription>
      </CardHeader>
      <CardContent
        ref={measuredRef}
        className={cx(
          'py-0 line-clamp-3',
          shouldTruncate && !readMore ? 'line-clamp-3' : 'line-clamp-none'
        )}
      >
        {testimonial.testimonial}
      </CardContent>
      <CardFooter>
        {shouldTruncate && (
          <Button variant={'ghost'} onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Afficher moins' : 'Afficher plus'}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
