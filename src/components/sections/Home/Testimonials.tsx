import SectionTitle from '@/components/templates/SectionTitle';
import { Card } from '@ui/Card';
import { cx } from 'class-variance-authority';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { FC, useCallback, useState } from 'react';

const educations = [
  {
    firstname: 'Valentin',
    lastname: 'Gerum',
    source: 'https://www.malt.fr/profile/sebastienouallet',
    company: 'Leboncoin',
    date: new Date(2023, 6, 19),
    testimonial: `Une super collaboration avec Sebastien en charge de nous aider à faire évoluer nos parcours d'authentification. Bonne prise en main du sujet, échange fluide au sein de l'équipe et des développeurs autour de lui. Je recommande.`,
    icon: '',
  },
  {
    firstname: 'Laurent',
    lastname: 'Ausset-Delon',
    source: 'https://www.linkedin.com/in/sebastien-ouallet',
    company: 'Cadic Services',
    date: new Date(2022, 11, 23),
    testimonial: `Sébastien s'est intégré très rapidement au sein des équipes de la société. Aussi bien auprès des développeurs avec lesquels il travaillait au quotidien, mais aussi avec l'équipe opérationnelle pour laquelle il opérait régulièrement en soutien technique.
    Professionnel sur tous les aspects des missions qui lui ont été confiées, il a toujours produit un code de grande qualité et, ce qui est plus rare, un même niveau d'excellence sur la documentation inhérente.
    Toutes les personnes avec lesquelles il a collaboré ont été unanimes... Ses grandes qualités humaines et techniques faisaient de Sébastien un collaborateur avec lequel il était facile et agréable de travailler.`,
    icon: '',
  },
  {
    firstname: 'Sébastien',
    lastname: 'Mannino',
    source: 'https://www.linkedin.com/in/sebastien-ouallet',
    company: 'Cadic Services',
    date: new Date(2022, 9, 19),
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
    source: 'https://www.linkedin.com/in/sebastien-ouallet',
    company: 'Entrepreneur',
    date: new Date(2022, 6, 2),
    testimonial: `Sébastien est très professionnel, ponctuel et consciencieux.
    Je vous le recommande.`,
    icon: '',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="my-32">
      <SectionTitle>{`Leur témoignage`}</SectionTitle>

      <div className="grid md:grid-cols-2 sm:gap-x-[10%] md:gap-x-[5%] gap-y-10 my-24 ">
        {educations.map((t, i) => (
          <Testimonial key={i} testimonial={t} />
        ))}
      </div>
    </section>
  );
}

const Testimonial = ({ testimonial }) => {
  return (
    <Card>
      <div className="flex flex-col p-4 md:p-8 gap-8">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900 dark:text-slate-200 font-bold text-xl">
              {`${testimonial.firstname} ${testimonial.lastname}`}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 ">
              @{testimonial.company}
            </p>
          </div>
          <p className="text-slate-900 dark:text-slate-300">
            {format(testimonial.date, 'dd MMM yyyy', { locale: fr })}
          </p>
        </div>

        <TextTruncate text={testimonial.testimonial} />
      </div>
    </Card>
  );
};

type TextTruncateProps = {
  text: string;
};

export const TextTruncate: FC<TextTruncateProps> = ({ text }) => {
  const [shouldTruncate, setShouldTruncate] = useState<boolean>(false);
  const [readMore, setReadMore] = useState<boolean>(false);

  // Measure the element to calculate the number of lines and
  // determine whether to truncate
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
    [text]
  );

  return (
    <div className="flex flex-col gap-4">
      <p
        ref={measuredRef}
        className={cx(
          'text-slate-900 dark:text-slate-300 line-clamp-3',
          shouldTruncate && !readMore ? 'line-clamp-3' : 'line-clamp-none'
        )}
      >
        {text}
      </p>

      {shouldTruncate && (
        <button
          type="button"
          onClick={() => setReadMore(!readMore)}
          className="w-fit"
        >
          {readMore ? 'Afficher moins' : 'Afficher plus'}
        </button>
      )}
    </div>
  );
};
