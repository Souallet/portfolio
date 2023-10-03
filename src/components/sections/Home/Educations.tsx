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
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 ">
        {educations.map((e, i) => (
          <Card key={i} className="col-span-1">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="flex flex-wrap justify-between gap-3">
                {e.degree}
                <span className="text-sm text-muted-foreground">
                  @{e.school}
                </span>
              </CardTitle>
              <CardDescription>
                {e.startedAt} - {e.endedAt}
              </CardDescription>
            </CardHeader>
            <CardContent>{e.name}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
