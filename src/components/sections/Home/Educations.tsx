import SectionTitle from '@/components/templates/SectionTitle';
import { Card } from '@ui/Card';

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

      <div className="grid md:grid-cols-2 sm:gap-x-[10%] md:gap-x-[5%] gap-y-10 ">
        {educations.map((e, i) => (
          <Card key={i}>
            <div className="flex flex-col p-4 md:p-8 gap-4">
              <div className="flex justify-between w-full">
                <h3 className="text-slate-900 dark:text-slate-200 font-bold text-xl">
                  {e.degree}
                </h3>
                <span className="text-slate-500 dark:text-slate-400 ">
                  @{e.school}
                </span>
              </div>
              <p className="text-slate-900 dark:text-slate-300">{e.name}</p>
              <p className="text-slate-900 dark:text-slate-300">
                {e.startedAt} - {e.endedAt}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
