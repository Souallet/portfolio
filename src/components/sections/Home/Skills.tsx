import CircleSkills from '@/components/skills/circle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSkillsByCategory } from '@/data/skills';
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionTitle,
} from '@ui/section';
import Image from 'next/image';

export default function SkillsSection() {
  const frontendSkills = getSkillsByCategory('frontend');
  const backendSkills = getSkillsByCategory('backend');
  const tools = getSkillsByCategory('tools');
  const others = getSkillsByCategory('others');

  return (
    <Section>
      <SectionTitle>{`Compétences`}</SectionTitle>
      <SectionDescription>
        Un apperçu non exhaustif de mes compétences et technologies favorites
      </SectionDescription>
      <SectionContent className="grid grid-cols-2 mt-12 gap-y-12 xl:grid-cols-3 xl:gap-y-8">
        <CircleSkills
          title="frontend"
          skills={frontendSkills}
          className="col-span-2 md:col-span-1 mx-auto mb-12"
        />
        <CircleSkills
          title="backend"
          skills={backendSkills}
          className="col-span-2 md:col-span-1 mx-auto mb-12"
        />

        <div className="col-span-2 xl:col-span-1 grid items-center">
          <CircleSkills
            title="Mes outils"
            skills={tools}
            className="col-span-1 mx-auto"
          />
        </div>

        <Card className="col-span-2 xl:col-span-3 mt-8">
          <CardHeader>
            <CardTitle className="font-extrabold tracking-wider text-muted-foreground text-center text-xl">
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
      </SectionContent>
    </Section>
  );
}
