import CardSkills from '@/components/skills/card';
import { getSkillsByCategory } from '@/data/skills';
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionTitle,
} from '@ui/section';

export default function SkillsSection() {
  const frontendSkills = getSkillsByCategory('frontend');
  const backendSkills = getSkillsByCategory('backend');
  const tools = getSkillsByCategory('tools');
  const others = getSkillsByCategory('others');

  return (
    <Section id="competences">
      <SectionTitle>{`Compétences`}</SectionTitle>
      <SectionDescription>
        Un apperçu non exhaustif de mes compétences et technologies favorites
      </SectionDescription>

      <SectionContent className="grid grid-cols-1 mt-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        <CardSkills title="frontend" skills={frontendSkills} />
        <CardSkills title="backend" skills={backendSkills} />
        <CardSkills title="Mes outils" skills={tools} />

        {/* <Card className="col-span-2 xl:col-span-3">
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
        </Card> */}
      </SectionContent>
    </Section>
  );
}
