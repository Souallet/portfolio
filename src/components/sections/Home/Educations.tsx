import SectionTitle from '@/components/templates/SectionTitle';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const educations = [
  {
    school: 'Infosup',
    degree: 'Brevet Technicien Supérieur',
    name: 'Services Informatiques aux Organisations',
    specialisation: 'Solutions Logicielles et Applications Métiers',
    location: 'Paris, France',
    startedAt: '2015',
    endedAt: '2017',
    description: '',
  },
  {
    school: 'Ynov Informatique',
    degree: 'Mastère',
    name: "Expert Développement Web et Systèmes d'Information",
    specialisation: '',
    location: 'Nanterre, France',
    startedAt: '2018',
    endedAt: '2020',
    description: '',
  },
];

export default function EducationsSection() {
  return (
    <section className="my-32">
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
    </section>
  );
}
