import CircleSkills from '@/components/skills/circle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSkillsByCategory } from '@/data/skills';
import { Section, SectionTitle } from '@ui/section';
import Image from 'next/image';

export default function SkillsSection() {
  const frontendSkills = getSkillsByCategory('frontend');
  const backendSkills = getSkillsByCategory('backend');
  const tools = getSkillsByCategory('tools');
  const others = getSkillsByCategory('others');

  return (
    <Section>
      <SectionTitle>{`Compétences`}</SectionTitle>
      <div className="grid grid-cols-2 gap-y-12 mt-10">
        <CircleSkills
          title="frontend"
          skills={frontendSkills}
          className="col-span-1 mx-auto"
        />
        <CircleSkills
          title="backend"
          skills={backendSkills}
          className="col-span-1 mx-auto"
        />

        <div className="col-span-2 grid items-center">
          <CircleSkills
            title="Mes outils"
            skills={tools}
            className="col-span-1 mx-auto"
          />
        </div>

        <Card className="col-span-2 mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              J'ai également travaillé avec ces technologies
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-evenly gap-8">
            {others.map((skill, i) => (
              <div
                key={i}
                className="p-4 bg-secondary rounded-full h-20 w-20 grid items-center"
              >
                <Image alt={skill.name} src={skill.image} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
