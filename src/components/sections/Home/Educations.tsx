import { educations } from '@/data/educations';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@ui/card';
import { Section, SectionTitle } from '@ui/section';

export default function EducationsSection() {
  return (
    <Section>
      <SectionTitle>{`Mes Formations`}</SectionTitle>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {educations.map((e, i) => (
          <Card key={i} className="col-span-1 flex flex-col justify-between">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle>{e.degree}</CardTitle>
              <CardDescription>{e.name}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-between text-sm text-muted-foreground">
              <span>@{e.school}</span>
              {e.startedAt} - {e.endedAt}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
