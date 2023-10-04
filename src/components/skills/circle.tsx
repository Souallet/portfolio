import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Skill } from '@/types/Skill';
import Image from 'next/image';

type CircleProps = {
  skills: Skill[];
  title?: string;
  className?: string;
};

export default function CircleSkills({
  skills,
  title,
  className = '',
}: CircleProps) {
  const renderImages = () => {
    const div = 360 / skills.length;
    var radius = 175;
    var offsetToParentCenter = 350 / 2;
    var offsetToChildCenter = 96 / 2;
    var totalOffset = offsetToParentCenter - offsetToChildCenter;

    return skills.map((skill, i) => {
      const y = Math.sin(div * i * (Math.PI / 180)) * radius;
      const x = Math.cos(div * i * (Math.PI / 180)) * radius;
      const top = parseInt((y + totalOffset).toString()) + 'px';
      const left = parseInt((x + totalOffset).toString()) + 'px';

      return (
        <div
          key={i}
          className={`absolute grid items-center p-6 bg-secondary rounded-full h-24 w-24`}
          style={{ top: top, left: left }}
        >
          <Image alt={skill.name} src={skill.image} />
        </div>
      );
    });
  };

  return (
    <Card
      className={cn(
        'relative grid items-center rounded-full w-[350px] h-[350px]',
        className
      )}
    >
      <CardHeader>
        <CardTitle className="uppercase text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="absolute top-0 left-0 w-full h-full p-0">
        {renderImages()}
      </CardContent>
    </Card>
  );
}
