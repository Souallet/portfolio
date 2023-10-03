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
  SectionDescription,
  SectionTitle,
} from '@/components/ui/section';
import { testimonials } from '@/data/testimonials';
import { cx } from 'class-variance-authority';
import { useCallback, useState } from 'react';

export default function TestimonialsSection() {
  return (
    <Section>
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
