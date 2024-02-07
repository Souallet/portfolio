import { cn } from '@/lib/utils';
import { Skill } from '@/types/Skill';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import Image from 'next/image';

type CircleProps = {
  skills: Skill[];
  title?: string;
  className?: string;
};

export default function CardSkills({
  skills,
  title,
  className = '',
}: CircleProps) {
  const renderImages = () => {
    return skills.map((skill, i) => {
      return (
        <Card
          key={i}
          className="w-fit inline-flex gap-3 items-center bg-muted px-3 py-2 text-sm font-medium "
        >
          <Image alt={skill.name} src={skill.image} className={`h-6 w-6`} />
          <span>{skill.name}</span>
        </Card>
      );
    });
  };

  return (
    <Card className={cn('flex flex-col border-none', className)}>
      <CardHeader>
        <CardTitle className="uppercase font-extrabold tracking-wider text-muted-foreground text-center text-xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-evenly gap-8">
        {renderImages()}
      </CardContent>
    </Card>
  );
}
