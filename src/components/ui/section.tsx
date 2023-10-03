import React from 'react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const SectionBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }) => (
  <Badge className={cn('mb-4', className)} variant="outline" {...props} />
));
SectionBadge.displayName = 'SectionBadge';

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn('text-3xl tracking-wide font-bold mb-8', className)}
    {...props}
  />
));
SectionTitle.displayName = 'SectionTitle';

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('mb-10 text-md text-muted-foreground', className)}
    {...props}
  />
));
SectionDescription.displayName = 'SectionDescription';

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return <section className={cn('my-24', className)} ref={ref} {...props} />;
});
Section.displayName = 'Section';

export { Section, SectionTitle, SectionDescription, SectionBadge };