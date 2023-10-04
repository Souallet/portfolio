import { WorksItem } from '@/components/works';
import { works } from '@/data/works';
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionTitle,
} from '@ui/section';

export default function WorksSection() {
  return (
    <Section>
      <SectionTitle>{`Mes réalisations`}</SectionTitle>
      <SectionDescription>{`Découvrez quelques un de mes projets personnels`}</SectionDescription>
      <SectionContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <WorksItem work={works[0]} />
        </div>
        <div className="col-span-1 flex flex-col gap-8">
          <div className="h-1/2">
            <WorksItem work={works[1]} />
          </div>
          <div className="h-1/2">
            <WorksItem work={works[2]} />
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
